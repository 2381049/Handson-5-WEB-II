
import Contact from "./Pages/Contact"
import Product from "./Pages/Product"



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      < path="/" element={<RootLayout/>}>
        <Route index element={<Home />}/>
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />
        <Route path="contact" element={<Contact />} />
        <Route path="jobs" element={<Jobs />} />
      </Route>
    )
  );
  return (
    <>
    </>
  )
}

export default App
