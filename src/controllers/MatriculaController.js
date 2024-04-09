const Controller = require("./Controller.js");
const MatriculaServices = require("../services/MatriculaServices.js");

const matriculaServices = new MatriculaServices();

class matriculaController extends Controller {
  constructor() {
    super(matriculaServices);
  }
}

module.exports = matriculaController;
