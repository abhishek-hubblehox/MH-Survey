const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const subCategorySchema = mongoose.Schema(
  {
    DepartmentCode: {
      type: String,
      required: true,
      trim: true,
    },
    DepartmentGroupCode: {
      type: String,
      required: true,
      trim: true,
    },
    DepartmentDescription: {
      type: String,
      required: true,
      trim: true,
    },
    DepartmentWeightage: {
      type: Number,
      required: true,
      trim: true,
    },
    SubDepartmentCode: {
      type: String,
      required: true,
      trim: true,
    },
    SubDepartmentDescription: {
      type: String,
      required: true,
      trim: true,
    },
    SubDepartmentWeightage: {
      type: Number,
      required: true,
      trim: true,
    },
    SubSubDepartmentCode: {
      type: String,
      required: true,
      trim: true,
    },
    SubSubDepartmentDescription: {
      type: String,
      required: true,
      trim: true,
    },
    SubSubDepartmentWeightage: {
      type: Number,
      required: true,
      trim: true,
    },

    CategoryCode: {
      type: String,
      required: true,
      trim: true,
    },
    CategoryDescription: {
      type: String,
      required: true,
      trim: true,
    },
    CategoryWeightage: {
      type: Number,
      required: true,
      trim: true,
    },
    CategoryDisplayOrder: {
      type: Number,
      required: true,
      trim: true,
    },
    SubCategoryCode: {
      type: String,
      required: true,
      trim: true,
    },
    SubCategoryDescription: {
      type: String,
      required: true,
      trim: true,
    },
    SubCategoryWeightage: {
      type: Number,
      required: true,
      trim: true,
    },
    SubCategoryDisplayOrder: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
subCategorySchema.plugin(toJSON);
subCategorySchema.plugin(paginate);

/**
 * @typedef SubCategory
 */

const SubCategory = mongoose.model('SubCategory', subCategorySchema);

module.exports = SubCategory;
