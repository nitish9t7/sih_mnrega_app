const BASE_URL = 'http://54.202.17.76/';

const API = {
  LOGIN: `${BASE_URL}login`,
  GET_EMPLOYEE_PROFILE: `${BASE_URL}getEmployeeProfile`,
  GET_EMPLOYEE_ATTENDENCE: `${BASE_URL}getEmployeeAttendence`,
  REGISTER_EMPLOYEE: `${BASE_URL}registerEmployee`,
  GET_ATTACHED_WORK: `${BASE_URL}getAttachedWork`,
  MARK_ATTENDANCE: `${BASE_URL}markAttendence`,
  GET_MY_EMPLOYEE_ATTENDANCE: `${BASE_URL}getMyEmployeesAttendence`,
  HIRE_EMPLOYEE: `${BASE_URL}changeSupervisor`,
};

export default API;
