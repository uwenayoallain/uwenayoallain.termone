import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Calculator } from "../calculator/containers/Calculator";
import App from "../App";

const pressCalculatorButtons = (commands: string[]) =>
  commands.forEach((command) => fireEvent.click(screen.getByText(command)));

test("Calculator is rendered", () => {
  render(<App />);

  expect(screen.queryByText("=")).toBeVisible();
});

test("Display works", () => {
  render(<App />);

  pressCalculatorButtons(["0", "0", "2"]);

  expect(screen.getByDisplayValue("2")).toBeVisible();
});

test("Simple addition", () => {
  render(<App />);

  pressCalculatorButtons(["2", "3", "+", "2", "="]);

  expect(screen.getByDisplayValue("25")).toBeVisible();
});

test("Simple multiplication", () => {
  render(<App />);

  pressCalculatorButtons(["2", "3", "\u00d7", "2", "="]);

  expect(screen.getByDisplayValue("46")).toBeVisible();
});

test("Simple division", () => {
  render(<App />);

  pressCalculatorButtons(["2", "4", "\u00f7", "2", "="]);

  expect(screen.getByDisplayValue("12")).toBeVisible();
});

test("Division by zero", () => {
  render(<App />);

  pressCalculatorButtons(["2", "\u00f7", "0", "="]);

  expect(screen.getByDisplayValue("Infinity")).toBeVisible();
});

test("Division by zero", () => {
  render(<App />);

  pressCalculatorButtons(["2", "\u00f7", "0", "="]);

  expect(screen.getByDisplayValue("Infinity")).toBeVisible();
});

test("Subsequest calculations using 'equals'", () => {
  render(<App />);

  pressCalculatorButtons(["2", "+", "2", "="]);

  expect(screen.getByDisplayValue("4")).toBeVisible();

  pressCalculatorButtons(["="]);

  expect(screen.getByDisplayValue("6")).toBeVisible();

  pressCalculatorButtons(["="]);

  expect(screen.getByDisplayValue("8")).toBeVisible();
});

test("Subsequest calculations using 'add'", () => {
  render(<App />);

  pressCalculatorButtons(["2", "+", "2", "+"]);

  expect(screen.getByDisplayValue("4")).toBeVisible();

  pressCalculatorButtons(["2"]);
  pressCalculatorButtons(["+"]);

  expect(screen.getByDisplayValue("6")).toBeVisible();

  pressCalculatorButtons(["2"]);
  pressCalculatorButtons(["+"]);

  expect(screen.getByDisplayValue("8")).toBeVisible();
});

test("Clearing calculation", () => {
  render(<App />);

  pressCalculatorButtons(["2", "+", "2", "+"]);

  expect(screen.getByDisplayValue("4")).toBeVisible();

  pressCalculatorButtons(["C"]);

  expect(screen.getByDisplayValue("0")).toBeVisible();
});

test("Big numbers", () => {
  render(<App />);

  pressCalculatorButtons([
    ...Array(12).fill("9"),
    "\u00d7",
    ...Array(12).fill("9"),
    "=",
  ]);

  expect(screen.getByDisplayValue("9.99999999998e+23")).toBeVisible();
});
