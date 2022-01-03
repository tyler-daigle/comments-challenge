import {render, screen, fireEvent} from "@testing-library/react";
import VoteButton from "../components/VoteButton";

test("Clicking the plus button should add one vote", () => {
  // I don't know how to mock the parent components yet and I need a
  // parent to pass the number of votes down.  
  render(<VoteButton numberVotes={0}/>);
  
  const plusButton = screen.getByRole("button", {name: "+"});
  const voteText = screen.getByText("0");

  fireEvent.click(plusButton);
  expect(voteText.innerText).toBe("1");
})
