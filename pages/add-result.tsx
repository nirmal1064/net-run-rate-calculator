import type { NextPage } from "next";
import { ChangeEvent, useState } from "react";
import CheckBox from "../components/CheckBox";
import CustomInput from "../components/CustomInput";
import DropdownInput from "../components/DropdownInput";
import { Result } from "../types";
import { resultDefault } from "../utils";

const AddResult: NextPage = () => {
  const [form, setForm] = useState<Result>(resultDefault);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value, name, type } = e.target;
    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      console.log(checked);
      setForm({ ...form, [name]: checked });
    } else {
      setForm({ ...form, [name]: Number(value) });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="input-group justify-content-center">
          <DropdownInput
            htmlFor="teamA"
            id="teamA"
            name="teamA"
            label="TeamA"
            options={[{ value: "1", label: "TeamA" }]}
            onChange={handleChange}
          />
          <CustomInput
            htmlFor="scoreA"
            label="Score"
            type="number"
            id="scoreA"
            name="scoreA"
            placeholder="Score"
            onChange={handleChange}
          />
          <CustomInput
            htmlFor="oversA"
            label="Overs"
            type="number"
            id="oversA"
            name="oversA"
            placeholder="Overs"
            onChange={handleChange}
          />
          <CustomInput
            htmlFor="maxOversA"
            label="Overs(Max)"
            type="number"
            id="maxOversA"
            name="maxOversA"
            placeholder="Overs(Max)"
            onChange={handleChange}
          />
          <CheckBox
            htmlFor="allOutA"
            label="All Out"
            id="allOutA"
            name="allOutA"
            onChange={handleChange}
          />
        </div>
        <div className="input-group justify-content-center">
          <DropdownInput
            htmlFor="teamB"
            id="teamB"
            name="teamB"
            label="TeamB"
            options={[{ value: "2", label: "TeamB" }]}
            onChange={handleChange}
          />
          <CustomInput
            htmlFor="scoreB"
            label="Score"
            type="number"
            id="scoreB"
            name="scoreB"
            placeholder="Score"
            onChange={handleChange}
          />
          <CustomInput
            htmlFor="oversB"
            label="Overs"
            type="number"
            id="oversB"
            name="oversB"
            placeholder="Overs"
            onChange={handleChange}
          />
          <CustomInput
            htmlFor="maxOversB"
            label="Overs(Max)"
            type="number"
            id="maxOversB"
            name="maxOversB"
            placeholder="Overs(Max)"
            onChange={handleChange}
          />
          <CheckBox
            htmlFor="allOutB"
            label="All Out"
            id="allOutB"
            name="allOutB"
            onChange={handleChange}
          />
        </div>
        <div className="input-group justify-content-center">
          <DropdownInput
            htmlFor="winner"
            label="Winner"
            name="winner"
            id="winner"
            options={[
              { value: "1", label: "TeamA" },
              { value: "2", label: "TeamB" }
            ]}
            onChange={handleChange}
          />
          <CustomInput
            htmlFor="matchNumber"
            label="Match No."
            type="number"
            id="matchNumber"
            name="matchNumber"
            placeholder="Match Number"
            onChange={handleChange}
          />
          <CheckBox
            className="form-group col-1 text-center"
            htmlFor="dlApplied"
            label="D/L"
            id="dlApplied"
            name="dlApplied"
            onChange={handleChange}
          />
          <CheckBox
            className="form-group col-md-1 text-center"
            htmlFor="tie"
            label="Tied"
            id="tie"
            name="tie"
            onChange={handleChange}
          />
          <CheckBox
            className="form-group col-md-1 text-center"
            htmlFor="noResult"
            label="N/R"
            id="noResult"
            name="noResult"
            onChange={handleChange}
          />
        </div>
        <div className="input-group justify-content-center">
          <div className="form-group col-md-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddResult;
