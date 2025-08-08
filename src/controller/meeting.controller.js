import { asyncHandler } from "../utils/asyncHandlar.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponce } from "../utils/ApiResponce.js";
import { Meeting } from "../models/meeting.model.js";

const createMeeting = asyncHandler(async (requestAnimationFrame, req) => {
  const { title, description, date, participants } = req.body;

  if (!title || !date || !participants || participants.length === 0) {
    throw new ApiError(
      400,
      "Title, date, and at least one participant is required"
    );
  }

  const meeting = await Meeting.create({
    title,
    description,
    date,
    participants,
    createdBy: req.user._id,
  });

  res
    .status(201)
    .json(new ApiResponce(201, meeting, "Meeting created successfully"));
});

// Get All Meetings => created by current user
const getMeetings = asyncHandler(async (req, res) => {
  const meetings = await Meeting.find({ createdBy: req.user._id }).populate(
    "participants",
    "name email"
  );

  res
    .status(200)
    .json(
      new ApiResponce(200, meetings, "User's meetings fetched successfully")
    );
});

// Update Meeting
const updateMeeting = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, description, date, participants } = req.body;

  const meeting = await Meeting.findById(id);

  if (!meeting) {
    throw new ApiError(404, "Meeting not found");
  }

  if (meeting.createdBy.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "You are not allowed to update this meeting");
  }

  meeting.title = title || meeting.title;
  meeting.description = description || meeting.description;
  meeting.date = date || meeting.date;
  meeting.participants = participants || meeting.participants;

  await meeting.save();

  res
    .status(200)
    .json(new ApiResponce(200, meeting, "Meeting updated successfully"));
});

// Delete Meeting
const deleteMeeting = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const meeting = await Meeting.findById(id);

  if (!meeting) {
    throw new ApiError(404, "Meeting not found");
  }

  if (meeting.createdBy.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "You are not allowed to delete this meeting");
  }

  await meeting.deleteOne();

  res
    .status(200)
    .json(new ApiResponce(200, {}, "Meeting deleted successfully"));
});

export { createMeeting, getMeetings, updateMeeting, deleteMeeting };
