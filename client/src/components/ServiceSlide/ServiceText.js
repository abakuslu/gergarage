import React from 'react'
import "car-makes-icons/dist/style.css";
import "./Sli.css";
import ServiceCard from "../ServiceCard";
import '../../App.css'
function ServiceText() {
    return (
      <div className="ServiceText">
        <h1 className="Header">Car Service Centre</h1>
        <p>
          Our commitment is to your complete satisfaction. We believe that no
          one is better qualified to maintain and service your car than one of
          our authorised service centres which are manufacturer accredited with
          fully qualified technicians. We have made significant investment in
          state of the art facilities to provide customers with a premium brand
          car service experience. By ensuring regular servicing in line with
          manufacturer's requirements this will provide you with a full service
          history and retain the value of your car.
        </p>
        <p>
          With simple, straightforward servicing and car repair options, Ger's
          garage is the one-stop shop in Dublin for servicing, repairs, NCT
          checks and tyres. We only look after select vehicles, so we know your
          vehicle better than most. Our car repair pricing is competitive with
          no hidden extras. If a car repair requires extra work, we get your
          approval up front. That way you're in complete control of the decision
          making.
        </p>
        <h1>CAR SERVICE FAQ</h1>
        <h3>
          <b>What does a car service include?</b>
        </h3>
        <p>
          What exactly is checked during a service depends upon which service is
          being completed and may vary based on make and model. Generally a
          service consists of an oil and filter change, a check with diagnostics
          for faults recorded, an entire visual check and road-test. A main
          service (dependent on mileage) includes an oil and filter change,
          plugs (if fitted), air filter, fuel filter, removing wheels to get
          into the braking system to visually check, check diagnostics, check
          all the electrics and then a road-test.
        </p>
        <h3>
          Is there anywhere for me to wait while the service is happening?
        </h3>
        <p>
          Our dealerships have comfortable waiting areas with Wi-Fi, TV and
          drinks facilities all of which are totally free.
        </p>
        <h3>Can I have courtesy car while my car is being repaired?</h3>
        <p>
          If a courtesy car comes available this will be offered for a small
          daily fee. If we have cannot offer a courtesy car then we will happily
          arrange a lift home or a collection service.
        </p>

        <div className="contai">
          <ServiceCard />
          <div className="brandIcons">
            <i class="car-audi"></i>
            <i class="car-bmw"></i>
            <i class="car-volkswagen"></i>
            <i class="car-fiat"></i>
            <i class="car-mercedes-benz"></i>
            <i class="car-volvo"></i>
            <i class="car-renault"></i>
            <i class="car-toyota"></i>
          </div>
        </div>
      </div>
    );
}

export default ServiceText;
