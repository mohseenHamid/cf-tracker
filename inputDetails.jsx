import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
// import '../App.css';
import "../css/inputDetails.css";

function InputDetails() {
  // const { id } = useParams()
  const [nonRenewable, setNonRenewable] = useState(0);
  const [solar, setSolar] = useState(0);
  const [wind, setWind] = useState(0);
  const [hydro, setHydro] = useState(0);
  const [commute, setCommute] = useState(0);
  // insert drop-down
  const [longFlight, setLongFlight] = useState(0);
  const [shortFlight, setShortFlight] = useState(0);
  const [message, setMessage] = useState("");

  const getNonRenewable = (e) => {
    setNonRenewable(e.target.value);
  };

  const getSolar = (e) => {
    setSolar(e.target.value);
  };

  const getWind = (e) => {
    setWind(e.target.value);
  };

  const getHydro = (e) => {
    setHydro(e.target.value);
  };

  const getCommute = (e) => {
    setCommute(e.target.value);
  };

  const getLongFlight = (e) => {
    setLongFlight(e.target.value);
  };

  const getShortFlight = (e) => {
    setShortFlight(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Successfully recorded your data, thanks!");
    setMessage("");
    // setEmail('')
  };

  return (
    <div id="main-container">
      <div id="header">{/* <h1>Header</h1> */}</div>
      <div id="main-body">
        <div id="mb-left">
          <div id="input-form-container">
            <div id="input-form-container-top">
              <h2 id="input-form-title" class="component-title">
                Your Lifestyle
              </h2>
            </div>
            <div id="input-form-container-bottom">
              <table id="input-form-table">
                <div id="input-form-s1">
                  <h3 class="component-sub-title">Home Use</h3>
                  <tr class="input-form-row component-text">
                    <td class="ifc c-left" id="q1">
                      <label>How much non-renewable energy does your household consume?</label>
                    </td>
                    <td class="ifc c-right" id="a1">
                      <input
                        type="number"
                        class="form-control input-sm"
                        value={nonRenewable}
                        required
                        onChange={(e) => getNonRenewable(e)}
                      />
                      <label> (kWh pcm)</label>
                    </td>
                  </tr>
                  <tr class="input-form-row component-text">
                    <td class="ifc c-left" id="q2">
                      <label>How much solar renewable energy does your household consume?</label>
                    </td>
                    <td class="ifc c-right" id="a2">
                      <input
                        type="number"
                        class="form-control input-sm"
                        value={nonRenewable}
                        required
                        onChange={(e) => getNonRenewable(e)}
                      />
                      <label> (kWh pcm)</label>
                    </td>
                  </tr>
                  <tr class="input-form-row component-text">
                    <td class="ifc c-left" id="q3">
                      <label>How much wind renewable energy does your household consume?</label>
                    </td>
                    <td class="ifc c-right" id="a3">
                      <input
                        type="number"
                        class="form-control input-sm"
                        value={nonRenewable}
                        required
                        onChange={(e) => getNonRenewable(e)}
                      />
                      <label> (kWh pcm)</label>
                    </td>
                  </tr>
                  <tr class="input-form-row component-text">
                    <td class="ifc c-left" id="q4">
                      <label>How much hydro-electric renewable energy does your household consume?</label>
                    </td>
                    <td class="ifc c-right" id="a4">
                      <input
                        type="number"
                        class="form-control input-sm"
                        value={nonRenewable}
                        required
                        onChange={(e) => getNonRenewable(e)}
                      />
                      <label> (kWh pcm)</label>
                    </td>
                  </tr>
                </div>

                <div id="input-form-s2">
                  <h3 class="component-sub-title">Commute</h3>
                  <tr class="input-form-row component-text">
                    <td class="ifc c-left" id="q5">
                      <label>How far is your workplace from home?</label>
                    </td>
                    <td class="ifc c-right" id="a5">
                      <input
                        type="number"
                        class="form-control input-sm"
                        value={nonRenewable}
                        required
                        onChange={(e) => getNonRenewable(e)}
                      />
                      <label> (km)</label>
                    </td>
                  </tr>
                  <tr class="input-form-row component-text">
                    <td class="ifc c-left" id="q6">
                      <label for="transport">What is your main mode of transport to work?</label>
                    </td>
                    <td class="ifc c-right" id="a6">
                      <select id="transport" name="transport">
                        <option value="none" selected disabled hidden>
                          Choose an Option
                        </option>
                        <option value="volvo">Diesel Car</option>
                        <option value="saab">Petrol Car</option>
                        <option value="fiat">Hybrid Car</option>
                        <option value="fiat">Motorbike</option>
                        <option value="audi">Bus</option>
                      </select>
                    </td>
                  </tr>
                </div>
              </table>
            </div>
          </div>
        </div>
        <div id="mb-right">
          <div id="mb-right-container">
            <div id="mb-right-container-top">
              <div id="cf-calculator-container-top">
                <h2 id="cf-calculator-title" class="component-title">
                  Carbon Footprint Calculator
                </h2>
              </div>
              <div id="cf-calculator-container-bottom">
                <table id="cf-calculator-table">
                  <tr>
                    <th class="cf-c1">
                      <td id="cf-c1-title" class="component-sub-title">
                        Description
                      </td>
                    </th>
                    <th class="cf-c2">
                      <td id="cf-c2-title" class="component-sub-title">
                        Carbon Footprint (kg)
                      </td>
                    </th>
                  </tr>
                  <tr>
                    <td>
                      <hr />
                    </td>
                    <td>
                      <hr />
                    </td>
                  </tr>
                  <tr class="component-text">
                    <td class="cf-c1">Non-renewable</td>
                    <td class="cf-c2">0</td>
                  </tr>
                  <tr class="component-text">
                    <td class="cf-c1">Solar</td>
                    <td class="cf-c2">0</td>
                  </tr>
                  <tr class="component-text">
                    <td class="cf-c1">Wind</td>
                    <td class="cf-c2">0</td>
                  </tr>
                  <tr class="component-text">
                    <td class="cf-c1">Hydro-electric</td>
                    <td class="cf-c2">0</td>
                  </tr>
                  <tr class="component-text">
                    <td class="cf-c1">Commute</td>
                    <td class="cf-c2">0</td>
                  </tr>
                  <tr>
                    <td>
                      <hr />
                    </td>
                    <td>
                      <hr />
                    </td>
                  </tr>
                  <tr id="cf-total" class="component-text">
                    <td id="cf-c1-total" class="cf-c1">
                      Total
                    </td>
                    <td id="cf-c2-total">0</td>
                  </tr>
                </table>
              </div>
            </div>
            <div id="mb-right-container-bottom">
              <button id="sbmt-btn">Calculate!</button>
            </div>
          </div>
        </div>
      </div>

      <div id="footer">{/* <h1>Footer</h1> */}</div>
    </div>
  );
}

export default InputDetails;
