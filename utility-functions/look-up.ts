type Route = {
  origin: {
    city: string;
    state: string;
    departureFee: string;
  };
  destination: {
    city: string;
    state: string;
    arrivalFee: string;
  };
};

type Origin = Route['origin'];
type Destination = Route['destination'];

const tripOrigin: Origin = {
  city: '',
  state: '',
  departureFee: '',
};

type FlexWorker = {
  name: string;
  age?: number;
};

const age = 15;
const flexWorker: FlexWorker = {
  name: 'Michail',
};
