import {createSiteMenuTemplate} from "./components/site-menu.js";
import {createFilterTemplate} from "./components/filter.js";
import {createTripInfoTemplate} from "./components/trip-info.js";
import {createTripInfoMainTemplate} from "./components/trip-info-main.js";
import {createTripInfoCostTemplate} from "./components/trip-info-cost.js";
import {createTripSortTemplate} from "./components/trip-sort.js";
import {createTripDaysListTemplate} from "./components/trip-days-list.js";
import {createDayTemplate} from "./components/day.js";
import {createTripEventsItemTemplate} from "./components/trip-events-item.js";
import {createEventEditTemplate} from "./components/event-edit.js";


const TRIP_DAYS_COUNT = 3;
const TRIP_EVENTS_ITEM_COUNT = 2;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const renderMultiple = (count, container, template, place) => {
  for (let i = 0; i < count; i++) {
    render(container, template, place);
  }
};


const tripMainElement = document.querySelector(`.trip-main`);
const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
const tripControlsFirstTitleElement = tripControlsElement.querySelector(`h2:first-child`);
const tripControlsSecondTitleElement = tripControlsElement.querySelector(`h2:nth-child(2)`);

render(tripMainElement, createTripInfoTemplate(), `afterbegin`);
const tripInfoElement = tripMainElement.querySelector(`.trip-info`);
render(tripInfoElement, createTripInfoMainTemplate(), `beforeend`);
render(tripInfoElement, createTripInfoCostTemplate(), `beforeend`);

render(tripControlsFirstTitleElement, createSiteMenuTemplate(), `afterend`);
render(tripControlsSecondTitleElement, createFilterTemplate(), `afterend`);

const pageMainElement = document.querySelector(`.page-main`);
const tripEventsElement = pageMainElement.querySelector(`.trip-events`);

render(tripEventsElement, createTripSortTemplate(), `beforeend`);
render(tripEventsElement, createEventEditTemplate(), `beforeend`);
render(tripEventsElement, createTripDaysListTemplate(), `beforeend`);

const tripDaysListElement = tripEventsElement.querySelector(`.trip-days`);
renderMultiple(TRIP_DAYS_COUNT, tripDaysListElement, createDayTemplate(), `beforeend`);

const dayElements = tripDaysListElement.querySelectorAll(`.day`);
for (let dayElement of dayElements) {
  const tripEventsListElement = dayElement.querySelector(`.trip-events__list`);
  renderMultiple(TRIP_EVENTS_ITEM_COUNT, tripEventsListElement, createTripEventsItemTemplate(), `beforeend`);
}
