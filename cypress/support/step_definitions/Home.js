/// <reference types="Cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../pages/Home";

Given("que navego pela home page", () => {
  HomePage.visit();
});

When("clico no botão para mostrar", () => {
  HomePage.clickInRevealButton();
});

Then("a mensagem deve ficar visível", () => {
  HomePage.verifyIfMessageIsExists();
});
