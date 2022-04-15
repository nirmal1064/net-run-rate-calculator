import type { NextPage } from "next";
import { ChangeEvent, useState } from "react";
import CheckBox from "../components/CheckBox";
import DropdownInput from "../components/DropdownInput";
import NumberInput from "../components/NumberInput";
import { iplTeams } from "../data/teams";
import { Option, Result } from "../types";
import { resultDefault } from "../utils";

const AddResult: NextPage = () => {
  const [form, setForm] = useState<Result>(resultDefault);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value, name, type } = e.target;
    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setForm({ ...form, [name]: checked });
    } else {
      setForm({ ...form, [name]: Number(value) });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  const populateTeams = (): Option[] => {
    const chooseTeam = { value: 0, label: "Choose.." };
    const teams = iplTeams.map((team) => {
      return { value: team.id, label: team.name };
    });
    return [chooseTeam, ...teams];
  };

  const populateWinnerDropdown = (): Option[] => {
    const teamA = iplTeams.find((team) => team.id === form.teamA);
    const teamB = iplTeams.find((team) => team.id === form.teamB);
    if (teamA && teamB) {
      return [
        { value: 0, label: "Choose.." },
        { value: teamA.id, label: teamA.name },
        { value: teamB.id, label: teamB.name }
      ];
    }
    return [];
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
            options={populateTeams()}
            onChange={handleChange}
          />
          <NumberInput
            htmlFor="scoreA"
            label="Score"
            step={1}
            id="scoreA"
            name="scoreA"
            placeholder="Score"
            onChange={handleChange}
          />
          <NumberInput
            htmlFor="oversA"
            label="Overs"
            step={0.1}
            id="oversA"
            name="oversA"
            placeholder="Overs"
            onChange={handleChange}
          />
          <NumberInput
            htmlFor="maxOversA"
            label="Overs(Max)"
            step={1}
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
            options={populateTeams()}
            onChange={handleChange}
          />
          <NumberInput
            htmlFor="scoreB"
            label="Score"
            step={1}
            id="scoreB"
            name="scoreB"
            placeholder="Score"
            onChange={handleChange}
          />
          <NumberInput
            htmlFor="oversB"
            label="Overs"
            step={0.1}
            id="oversB"
            name="oversB"
            placeholder="Overs"
            onChange={handleChange}
          />
          <NumberInput
            htmlFor="maxOversB"
            label="Overs(Max)"
            step={1}
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
            options={populateWinnerDropdown()}
            onChange={handleChange}
          />
          <NumberInput
            htmlFor="matchNumber"
            label="Match No."
            step={1}
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
