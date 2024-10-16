import AOS from "aos";
import "aos/dist/aos.css";
import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoadingSpinner } from "./components/LoadingSpinner";

// Lazy load components
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const TeamListStatic = lazy(() => import("./pages/TeamListStatic"));
const ContactForm = lazy(() => import("./pages/ContactForm"));
const Privacy = lazy(() => import("./pages/Privacy"));
const JobPostListStatic = lazy(() => import("./pages/JobPostListStatic"));
const AppDev = lazy(() => import("./pages/AppDev"));
const Cloud = lazy(() => import("./pages/Cloud"));
const IOSAppDev = lazy(() => import("./pages/IOSAppDev"));
const MobileApp = lazy(() => import("./pages/MobileApp"));
const WebDev = lazy(() => import("./pages/WebDev"));
const TechnologyList = lazy(() => import("./pages/TechnologyList"));
const FrontendTechnologiesStatic = lazy(
  () => import("./pages/FrontendTechnologiesStatic"),
);
const BackendTechnologiesStatic = lazy(
  () => import("./pages/BackendTechnologiesStatic"),
);
const AddBook = lazy(() => import("./fetaures/books/AddBook"));
const BooksView = lazy(() => import("./fetaures/books/BooksView"));
const EditBook = lazy(() => import("./fetaures/books/EditBook"));
const Error = lazy(() => import("./pages/Error"));
const GetStartedPage = lazy(() => import("./pages/GetStartedPage"));
const LearnMorePage = lazy(() => import("./pages/LearnMorePage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const TestYourIQ = lazy(() => import("./components/TestYourIQ/TestYourIQ"));
const BlogsPage = lazy(() => import("./pages/BlogsPage"));

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <div className="dark:bg-slate-900 dark:text-white">
        {/* Use Suspense to show fallback UI while components load */}
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/team" element={<TeamListStatic />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/career" element={<JobPostListStatic />} />
            <Route path="/app" element={<AppDev />} />
            <Route path="/cloud" element={<Cloud />} />
            <Route path="/ios" element={<IOSAppDev />} />
            <Route path="/mobile" element={<MobileApp />} />
            <Route path="/web" element={<WebDev />} />
            <Route path="/technologies" element={<TechnologyList />}>
              <Route path="frontend" element={<FrontendTechnologiesStatic />} />
              <Route path="backend" element={<BackendTechnologiesStatic />} />
            </Route>
            <Route path="/add-book" element={<AddBook />} />
            <Route path="/show-books" element={<BooksView />} />
            <Route path="/edit-book" element={<EditBook />} />
            <Route path="*" element={<Error />} />
            <Route path="/get-started" element={<GetStartedPage />} />
            <Route path="/learn-more" element={<LearnMorePage />} />
            <Route path="/products/:tab" element={<ProductPage />} />
            <Route path="/test-your-iq" element={<TestYourIQ />} />
            <Route path="/blogs" element={<BlogsPage />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
