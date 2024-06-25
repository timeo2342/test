export const getTrips = async () => {
    // Mock API call
    return [
      {
        id: 1,
        title: "BT01",
        description: "San Francisco World Trade Center on new Server/IOT/Client ",
        startTrip: [2021, 2, 13, 0, 0],
        endTrip: [2021, 2, 15, 16, 56],
        meetings: [
          {
            id: 1,
            title: "One Conference",
            description: "Key Note on One Conference",
          },
          {
            id: 2,
            title: "Zero Conference",
            description: "Workshop Zero on One Conference",
          },
        ],
      },
      {
        id: 2,
        title: "BT02",
        description: "Santa Clara Halley on new Server/IOT/Client",
        startTrip: [2021, 6, 23, 9, 0],
        endTrip: [2021, 6, 27, 16, 56],
        meetings: [
          {
            id: 3,
            title: "One Conference",
            description: "HandsOn on One Conference",
          },
          {
            id: 4,
            title: "One Conference",
            description: "Key Note on One Conference",
          },
        ],
      },
      {
        id: 3,
        title: "BT03",
        description: "San Cose City Halley on Docker/IOT/Client",
        startTrip: [2021, 12, 13, 9, 0],
        endTrip: [2021, 12, 15, 16, 56],
        meetings: [
          {
            id: 5,
            title: "One Conference",
            description: "Key Note on One Conference",
          },
        ],
      },
    ];
  };
  
  export const addTrip = async (trip) => {
    // Mock API call to add a trip
    return { ...trip, id: Math.floor(Math.random() * 1000) };
  };
  
  export const updateTrip = async (id, updatedTrip) => {
    // Mock API call to update a trip
    return updatedTrip;
  };
  
  export const deleteTrip = async (id) => {
    // Mock API call to delete a trip
    return true;
  };
  
  export const getMeetings = async (tripId) => {
    // Mock API call to get meetings for a trip
    return [
      { id: 1, title: "Meeting 1", description: "Description 1", tripId },
      { id: 2, title: "Meeting 2", description: "Description 2", tripId },
    ];
  };
  
  export const getFlights = async (tripId) => {
    // Mock API call to get flights for a trip
    return [
      { id: 1, flightNumber: "FL123", tripId },
      { id: 2, flightNumber: "FL456", tripId },
    ];
  };
  
  export const getEmployees = async () => {
    // Mock API call to get employees
    return [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
    ];
  };
  