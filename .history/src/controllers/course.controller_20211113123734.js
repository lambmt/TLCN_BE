const controller = require('./controller')
const CourseServices = require('../services/course.services')


const getAllCourses = async (req, res, next) => {
  try {
    const resServices = await CourseServices.getAllCourses(req.query)
    return controller.sendSuccess(res, resServices.data, 200, resServices.message)
  } catch (err) {
    console.log(err);
    return controller.sendError(res)
  }
}

const createCourse = async (req, res, next) => {
  try {
    const resServices = await CourseServices.createNewCourse(req.value.body)
    if (!resServices.success)
      return controller.sendSuccess(res, resServices.success, 300, resServices.message)
    return controller.sendSuccess(res, resServices.data, 200, resServices.message)
  } catch (error) {
    return controller.sendError(res)
  }

}

const getCourse = async (req, res, next) => {
  try {
    const { id } = req.params
    const resServices = await CourseServices.getCourse(id)
    if (!resServices.success)
      return controller.sendSuccess(res, {}, 300, resServices.message)
    return controller.sendSuccess(res, resServices.data, 200, resServices.message)
  } catch (error) {
    return controller.sendError(res)
  }
}

const getCourseByRoom = async (req, res, next) => {
  try {
    const { FK_Room } = req.params
    const resServices = await CourseServices.getCourseByRoom(FK_Room)
    if (!resServices.success)
      return controller.sendSuccess(res, {}, 300, resServices.message)
    return controller.sendSuccess(res, resServices.data, 200, resServices.message)
  } catch (error) {
    return controller.sendError(res)
  }
}

const getCourseByCategory = async (req, res, next) => {
  try {
    const resServices = await CourseServices.getCourseByCategory(req.query)
    if (!resServices.success)
      return controller.sendSuccess(res, {}, 300, resServices.message)
    return controller.sendSuccess(res, resServices.data, 200, resServices.message)
  } catch (error) {
    console.log(error)
    return controller.sendError(res)
  }

}

const updateCourse = async (req, res, next) => {
  try {
    const { _id } = req.params
    const resServices = await CourseServices.updateCourse(_id, req.body)
    if (!resServices.success)
      return controller.sendSuccess(res, {}, 300, resServices.message)
    return controller.sendSuccess(res, resServices.data, 200, resServices.message)
  } catch (error) {
    return controller.sendError(res)
  }
}

const deleteCourse = async (req, res, next) => {
  try {
    const { id } = req.params
    const resServices = await CourseServices.deleteCourse(id)
    if (!resServices.success)
      return controller.sendSuccess(res, {}, 300, resServices.message)
    return controller.sendSuccess(res, {}, 200, resServices.message)
  } catch (error) {
    return controller.sendError(res)
  }
}
const getFilter = async (req, res, next) => {
  try {
    const resServices = await CourseServices.getFilter()
    if (!resServices.success)
      return controller.sendSuccess(res, {}, 300, resServices.message)
    return controller.sendSuccess(res, resServices.data, 200, resServices.message)
  } catch (error) {
    return controller.sendError(res)
  }
}

const searchCourse = async (req, res, next) => {
  try {
    const searchField = req.query.tags
    const resServices = await CourseServices.searchCourse(searchField)
    if (!resServices.success)
      return controller.sendSuccess(res, {}, 300, resServices.message)
    return controller.sendSuccess(res, resServices.data, 200, resServices.message)
  } catch (error) {
    return controller.sendError(res)
  }
}

const filterByPrice = async (req, res, next) => {
  try {
    const price = req.query.price
    const resServices = await CourseServices.filterByPrice(price)
    if (!resServices.success)
      return controller.sendSuccess(res, {}, 300, resServices.message)
    return controller.sendSuccess(res, resServices.data, 200, resServices.message)
  } catch (error) {
    return controller.sendError(res)
  }
}

module.exports = Controller = {
  getAllCourses,
  createCourse,
  getCourse,
  getCourseByRoom,
  getCourseByCategory,
  updateCourse,
  deleteCourse,
  getFilter,
  searchCourse,
  filterByPrice
}