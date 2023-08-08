import "./App.css"
//import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./components/home/Home"
//import About from "./components/about/About"
//import CourseHome from "./components/allcourses/CourseHome"
//import Team from "./components/team/Team"
//import Pricing from "./components/pricing/Pricing"
//import Blog from "./components/blog/Blog"
//import Contact from "./components/contact/Contact"
//import Footer from "./components/common/footer/Footer"
//import Home from "./components/home/Home"
import UniversityHeader from "./components/university/components/common/header/UniversityHeader"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import TeacherHeader from "./components/teacher/components/common/header/TeacherHeader"
import SignUp from "./components/university/signup/Signup"
import UniversityAuth from "./components/university/signup/UniversityAuth"
import TeacherAuth from "./components/teacher/signup/TeacherAuth"
import StudentAuth from "./components/student/signup/StudentAuth"
import StaffAuth from "./components/staff/signup/StaffAuth"
import StudentHeader from "./components/student/components/common/header/StudentHeader"
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/"  exact component={Home} />
          <Route path="/about"  exact component={About} />
          <Route path="/contact"  exact component={Contact} />
          <Route path="/university"  exact component={UniversityAuth} />
          <Route path="/teacher"  exact component={TeacherAuth} />
          <Route path="/student"  exact component={StudentAuth} />
          <Route path="/staff"  exact component={StaffAuth} />
          <Route path="/university_header"  exact component={UniversityHeader} />
          <Route path="/teacher_header"  exact component={TeacherHeader} />
          <Route path="/student_header"  exact component={StudentHeader} />
          

        </Switch>
      </Router>
        
    </>
  )
}

export default App