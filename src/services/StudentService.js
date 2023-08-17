import axios from 'axios'

const STUDENT_BASE_REST_API_URL = 'http://localhost:8080/students';

class StudentService {

    getAllStudents() {
        return axios.get(STUDENT_BASE_REST_API_URL);
    }

    saveStudent(studentData) {
        return axios.post(STUDENT_BASE_REST_API_URL, studentData)
    }

    updateStudent(id, studentData) {
        return axios.put(`${STUDENT_BASE_REST_API_URL}/${id}`, studentData);
    }

    getStudentById(id) {
        return axios.get(`${STUDENT_BASE_REST_API_URL}/${id}`);
    }

    deleteStudent(id) {
        return axios.delete(STUDENT_BASE_REST_API_URL + '/' + id);
    }
}

export default new StudentService();