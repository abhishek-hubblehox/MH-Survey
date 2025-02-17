const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { divisionService } = require('../services');

const createDivision = catchAsync(async (req, res) => {
  const division = await divisionService.createDivision(req.body);
  res.status(httpStatus.CREATED).send(division);
});

const queryDivision = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['divisionName']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await divisionService.queryDivision(filter, options);
  res.send(result);
});

const getDivision = catchAsync(async (req, res) => {
  const division = await divisionService.getDivisionById(req.params.divisionId);
  if (!division) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Divisionnot found');
  }
  res.send(division);
});

const updateDivision = catchAsync(async (req, res) => {
  const division = await divisionService.updateDivisionById(req.params.divisionId, req.body);
  res.send(division);
});

const deleteDivision = catchAsync(async (req, res) => {
  await divisionService.deleteDivisionById(req.params.divisionId);
  res.status(httpStatus.NO_CONTENT).send();
});

const getDivisionByName = catchAsync(async (req, res) => {
  const division = await divisionService.getDivisionByName(req.params.divisionName);
  if (!division) {
    throw new ApiError(httpStatus.NOT_FOUND, 'division not found');
  }
  res.send(division);
});

module.exports = {
  createDivision,
  queryDivision,
  getDivision,
  updateDivision,
  deleteDivision,
  getDivisionByName,
};
