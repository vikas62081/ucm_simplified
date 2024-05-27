import { REACT_API_URL } from "../urlConfig";


class SubjectService{
  baseUrl = REACT_API_URL;

  constructor() {}

  getSubjects = () => `${this.baseUrl}/subjects`;
   
}

export default SubjectService;
