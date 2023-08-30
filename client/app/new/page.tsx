import React from "react";
import Form from "../components/Form";

const NewForm = () => {
  return (
    <>
      <div className="max-w-3xl my-12 mx-auto">
        <h1 className="dark:text-white text-4xl font-bold my-3">
          Write Journal
        </h1>
        <Form />
      </div>
    </>
  );
};

export default NewForm;
