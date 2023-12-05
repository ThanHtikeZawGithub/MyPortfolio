'use client'
import { FrontPage } from "../components/frontPage";
import Loading from "./loading";

export default function HomePage() {

  return (
    <div>
    <Loading />
    <FrontPage/>
    </div>
  );
}
