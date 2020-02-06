import React, { useState } from "react";
import useForm from "react-hook-form";
import * as yup from "yup"; // you will have to install yup
import serviceHandler from "../../helpers/serviceHandler";
import apiconfig from "../../constants/URL";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import Select from "react-select";

const schema = yup.object().shape({
  background_image: yup.string().required(),
  company_name: yup.string().required(),
  welcome_message: yup.string().required(),
  logo: yup.string().required(),
  contactus: yup.string().required(),
  release_date: yup.string().required(),
  formulary_date: yup.string().required()
});

function settingsForm(props) {
  const {
    handleSubmit,
    register,
    errors,
    setValue,
    setError,
    clearError
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    validationSchema: schema,
    defaultValues: props.settings
  });

  const handleEditorChange = e => {
    setValue("welcome_message", e.target.getContent());
    if (e.target.getContent() == "") {
      setError("welcome_message", "required");
    } else {
      clearError("welcome_message");
    }
  };

  const onSubmit = data => {
    let url = apiconfig.UPDATE_SETTINGS;
    let method = "PUT";

    let config = {
      url,
      method,
      data: { data }
    };
    serviceHandler(config)
      .then(response => {
        if (response.message == "success" && response.status == 200) {
          window.location.reload();
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const { handleClose } = props;
  console.log("errors", errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="card_box_new">
        <div className="">
          <div className="form-group row">
            <label className="col-md-2">Background Image : </label>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                name="background_image"
                placeholder="Enter Background Image"
                ref={register}
                autoComplete="off"
              />
            </div>
            {errors.background_image && (
              <div className="form-field-error">Required</div>
            )}
          </div>
          <div className="form-group row">
            <label className="col-md-2">Company Name : </label>
            <div className="col-md-6">
              {" "}
              <input
                type="text"
                className="form-control"
                name="company_name"
                placeholder="Enter Company Name"
                ref={register}
                autoComplete="off"
              />
            </div>
            {errors.company_name && (
              <div className="form-field-error">Required</div>
            )}
          </div>
          <div className="form-group row">
            <label className="col-md-2">Welcome Message : </label>
            <div className="col-md-6">
              {" "}
              <Editor
                initialValue={props.settings.welcome_message}
                textareaName="welcome_message"
                ref={e => register({ name: "welcome_message", required: true })}
                apiKey="hfomkajhmia8ws86f81r6w3rfkmysyx0gsspyhyiye21xo7a"
                init={{
                  height: 200,
                  menubar: false,
                  plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table paste code help wordcount"
                  ],
                  toolbar:
                    "undo redo | formatselect | bold italic backcolor | \
                                     alignleft aligncenter alignright alignjustify | \
                                     bullist numlist outdent indent | removeformat | help"
                }}
                onChange={e => handleEditorChange(e)}
              />
            </div>
            {errors.welcome_message && (
              <div className="form-field-error">Required</div>
            )}
          </div>
          <div className="form-group row">
            <label className="col-md-2">Company Logo : </label>
            <div className="col-md-6">
              {" "}
              <input
                type="text"
                className="form-control"
                name="logo"
                placeholder="Enter Company Logo"
                ref={register}
                autoComplete="off"
              />
            </div>
            {errors.logo && <div className="form-field-error">Required</div>}
          </div>
          <div className="form-group row">
            <label className="col-md-2">Contact Us Details : </label>
            <div className="col-md-6">
              {" "}
              <input
                type="text"
                className="form-control"
                name="contactus"
                placeholder="Enter Contact Us Details"
                ref={register}
                autoComplete="off"
              />
            </div>
            {errors.contactus && (
              <div className="form-field-error">Required</div>
            )}
          </div>
          <div className="form-group row">
            <label className="col-md-2">Copyright : </label>
            <div className="col-md-6">
              {" "}
              <input
                type="text"
                className="form-control"
                name="copyright"
                placeholder="Enter Copyright Details"
                ref={register}
                autoComplete="off"
              />
            </div>
            {errors.copyright && (
              <div className="form-field-error">Required</div>
            )}
          </div>
          <div className="form-group row">
            <label className="col-md-2">Release Date : </label>
            <div className="col-md-6">
              {" "}
              <input
                type="date"
                className="form-control"
                name="release_date"
                placeholder="Enter Release Date"
                ref={register}
                autoComplete="off"
              />
            </div>
            {errors.release_date && (
              <div className="form-field-error">Required</div>
            )}
          </div>
          <div className="form-group row">
            <label className="col-md-2">formulary Date : </label>
            <div className="col-md-6">
              {" "}
              <input
                type="date"
                className="form-control"
                name="formulary_date"
                placeholder="Enter Formulary Date"
                ref={register}
                autoComplete="off"
              />
            </div>
            {errors.formulary_date && (
              <div className="form-field-error">Required</div>
            )}
          </div>
        </div>
      </div>
      <div className="row buttons_row_new">
        <div className="col-md-12 text-center">
          <button className="btn btn-primary mr-1" type="submit">
            Save
          </button>
          <button
            className="btn btn-secondary"
            type="button"
            onClick={() => handleClose()}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}
export default settingsForm;
