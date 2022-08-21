const BASE_URL = 'http://192.168.1.17:3000/';

const API = {
  LOGIN: `${BASE_URL}login`,
  GET_EMPLOYEE_PROFILE: `${BASE_URL}getEmployeeProfile`,
  GET_EMPLOYEE_ATTENDENCE: `${BASE_URL}getEmployeeAttendence`,
  REGISTER_EMPLOYEE: `${BASE_URL}registerEmployee`,
  GET_ATTACHED_WORK: `${BASE_URL}getAttachedWork`,
  MARK_ATTENDANCE: `${BASE_URL}markAttendence`,
  GET_MY_EMPLOYEE_ATTENDANCE: `${BASE_URL}getMyEmployeesAttendence`,
};

export default API;
