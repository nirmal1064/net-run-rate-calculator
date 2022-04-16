import {
  Button,
  Center,
  Container,
  FormControl,
  HStack,
  VStack
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { ChangeEvent, useState } from "react";
import CustomNumberInput from "../components/CustomNumberInput";
import CustomSelectInput from "../components/CustomSelectInput";
import { iplTeams } from "../data/teams";
import { Option, Result } from "../types";
import { resultDefault } from "../utils";

const AddResult: NextPage = () => {
  const [form, setForm] = useState<Result>(resultDefault);
  const populateTeams = (): Option[] => {
    return iplTeams.map((team) => {
      return { value: team.id, label: team.name };
    });
  };

  const populateWinnerDropdown = (): Option[] => {
    const teamA = iplTeams.find((team) => team.id === form.teamA);
    const teamB = iplTeams.find((team) => team.id === form.teamB);
    if (teamA && teamB) {
      return [
        { value: teamA.id, label: teamA.name },
        { value: teamB.id, label: teamB.name }
      ];
    }
    return [];
  };

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

  const populateYesorNo = (): Option[] => {
    return [
      { value: 1, label: "Yes" },
      { value: 0, label: "No" }
    ];
  };

  return (
    <Container>
      <Head>
        <title>Net Run Rate Calculator</title>
        <meta
          name="description"
          content="Calculate net run rate (NRR) in cricket"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form onSubmit={handleSubmit}>
        <VStack spacing={"4"}>
          <HStack>
            <CustomSelectInput
              htmlFor="teamA"
              id="teamA"
              label="Team A"
              placeholder="Choose..."
              options={populateTeams()}
              onChange={handleChange}
            />
            <CustomNumberInput
              htmlFor="scoreA"
              label="Score"
              id="scoreA"
              step={1}
              onChange={handleChange}
            />
            <CustomNumberInput
              htmlFor="oversA"
              label="Overs"
              id="oversA"
              step={0.1}
              onChange={handleChange}
            />
            <CustomNumberInput
              htmlFor="maxOversA"
              label="Overs(Max)"
              id="maxOversA"
              step={1}
              onChange={handleChange}
            />
            <CustomSelectInput
              htmlFor="allOutA"
              id="allOutA"
              label="All Out"
              placeholder="Choose..."
              options={populateYesorNo()}
              onChange={handleChange}
            />
          </HStack>
          <HStack>
            <CustomSelectInput
              htmlFor="teamB"
              id="teamB"
              label="Team B"
              placeholder="Choose..."
              options={populateTeams()}
              onChange={handleChange}
            />
            <CustomNumberInput
              htmlFor="scoreB"
              label="Score"
              id="scoreB"
              step={1}
              onChange={handleChange}
            />
            <CustomNumberInput
              htmlFor="oversB"
              label="Overs"
              id="oversB"
              step={0.1}
              onChange={handleChange}
            />
            <CustomNumberInput
              htmlFor="maxOversB"
              label="Overs(Max)"
              id="maxOversB"
              step={1}
              onChange={handleChange}
            />
            <CustomSelectInput
              htmlFor="allOutB"
              label="All Out"
              placeholder="Choose..."
              id="allOutB"
              options={populateYesorNo()}
              onChange={handleChange}
            />
          </HStack>
          <HStack>
            <CustomSelectInput
              htmlFor="winner"
              id="winner"
              label="Winner"
              placeholder="Select Winner"
              options={populateWinnerDropdown()}
              onChange={handleChange}
            />
            <CustomNumberInput
              htmlFor="matchNumber"
              label="Match No."
              id="matchNumber"
              step={1}
              onChange={handleChange}
            />
            <CustomSelectInput
              htmlFor="dlApplied"
              id="dlApplied"
              label="D/L"
              placeholder="Choose..."
              options={populateYesorNo()}
              onChange={handleChange}
            />
            <CustomSelectInput
              htmlFor="tie"
              id="tie"
              label="Tie"
              placeholder="Choose..."
              options={populateYesorNo()}
              onChange={handleChange}
            />
            <CustomSelectInput
              htmlFor="noResult"
              id="noResult"
              label="NR"
              placeholder="Choose..."
              options={populateYesorNo()}
              onChange={handleChange}
            />
          </HStack>
          <HStack>
            <FormControl>
              <Center>
                <Button colorScheme="blue" type="submit">
                  Submit
                </Button>
                {/* <ButtonGroup variant="solid" spacing="6">
                <Button colorScheme="blue" type="submit">
                  Submit
                </Button>
                <Button type="reset">Reset</Button>
              </ButtonGroup> */}
              </Center>
            </FormControl>
          </HStack>
        </VStack>
      </form>
    </Container>
  );
};

export default AddResult;
