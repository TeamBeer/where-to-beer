import React from "react";
import { shallow } from "enzyme";
import EventCreate from "../../src/components/EventCreate";

describe("EventCreate", () => {
  let wrapper;
  let instance;
  let mockCreateNewEvent;
  let mockEventData;
  let mockUniqueEventName;

  beforeEach(() => {
    mockEventData = { memberName: "Joe" };
    mockCreateNewEvent = jest.fn();
    mockUniqueEventName = jest.fn();
    wrapper = shallow(
      <EventCreate
        eventData={mockEventData}
        createNewEvent={mockCreateNewEvent}
        uniqueEventName={mockUniqueEventName}
      />,
    );
    instance = wrapper.instance();
  });

  test("Input change is passed to handler", () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: "memberName",
        value: "J",
      },
    };
    wrapper.find(".setupform__name").simulate("change", event);
    expect(wrapper.state("eventData").memberName).toEqual("J");
  });
});
