import styles from "./IdeaInsight.module.css";
import Button from "../Button/Button";
import { useState } from "react";
import axios from 'axios'


const Ideainsight = () => {

  const [name, setName] = useState("");
  const [domain, setDomain] = useState("")
  const [description, setDescription] = useState("")
  const [result, setResult] = useState("none")
  const [marks, setMarks] = useState([])
  const [remarks, setRemarks] = useState([])
  const [headings, setHeading] = useState(["Problem Assessment", "Solution Viability", "Team", "USP", "Viability", "Financials", "Market Size", "Business Model"])
  const [total, setTotal] = useState(0)
  const [tips, setTips] = useState("none")

  const submit = async (event) => {
    event.preventDefault();
    var marks = []
    var remarks = []
    var temp = []
    try{             
      // backend path
      const response = await axios.post("http://127.0.0.1:5000/idea-insight", {
        name: name,
        domain: domain,
        description: description
      })

      console.log(typeof response.data);
      var res = JSON.parse(response.data)
      var sum = 0;
      for (const key in res) {
        if (res.hasOwnProperty(key)) {
          var temp = res[key].toString().split(".,")
          marks.push(temp[1])
          remarks.push(temp[0])
          sum += Number(temp[1])
        }
      }
      setTotal(sum)
      if (sum >= 28){
        alert("Passed")
      }
      else{
        alert('Failed')
      }
      setRemarks(remarks);
      setMarks(marks)
      setResult("block");
      
    }
    catch(error){
      console.error("Failed to Generate: ", error.message);
      alert(error);
    }
  }

  const handleTips = (event) => {
    event.preventDefault();
    if (tips == "none"){
      setTips("block")
    }
    else {
      setTips("none")
    }
  }

  return (
    <>
      <div className={styles.topBar}></div>

      <div className={styles.mainContainer}>
        <div className={styles.sideBar}>
          <img className={styles.logoImage} src="images/Logo.png" alt="logo" />

          <img
            className={styles.dashboardImage}
            src="images/Dashboard Links.png"
            alt="logo"
          />
        </div>
        {/* <div className={styles.mainBody}>
    
    <div className={styles.content}>
    <h1>Hey, YOU! </h1>
    <span>Pave your path towards a successful future</span>
    
    <div>
    <img src="images/Dashboard Image.png" alt="" />
    </div>
    <Button text="Let's Go!" className={styles.start_btn} />
        </div>
    
</div> */}
      <div className={styles.main_container}>
        <div className={styles.container}>
          <div className={styles.contact_form}>
            <form className={styles.form}>
              <img src="/images/Idea Validation 3.png" alt="" />
              <h1>Idea Insight</h1>
              <div style={{"width":"100%", "display":"flex", "padding":"20px"}}>
              <div className={styles.form_control}>
                <div className={styles.form_containers}>
                  <label>Project Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Project Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
              </div>
              <div className={styles.form_control}>
                <div className={styles.form_containers}>
                  <label>Domain</label>
                  <select id="dropdown" value={domain} onChange={(e) => setDomain(e.target.value)}>
                    <option value="">Select a Domain</option>
                    <option value="option1">Artificial Intelligence</option>
                    <option value="option2">Cyper Security</option>
                    <option value="option3">Data Science</option>
                    <option value="option4">Software Development</option>
                    <option value="option5">Database Management</option>
                    <option value="option6">Operating Systems</option>
                    <option value="option7">Cloud Computing</option>
                    <option value="option8">Computer Graphics</option>
                  </select>
                </div>
              </div>
              </div>
              <div className={styles.form_control}>
                <div className={styles.form_containers}>
                  <label>Description</label>
                  <textarea
                    name="description"
                    placeholder="Enter Project Description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    rows={15}  // Set the desired number of rows
                    cols={90} // Set the desired number of columns
                    style={{ resize: 'none' }} 
                    
                  />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  flexDirection: "column",
                }}
              >
                <div onClick={submit}>
                  <Button className={styles.loginBtn} text="Submit" />
                </div>

                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                  }}
                ></div>
              </div>
            </form>
          </div>
          <div className={styles.result_container} style={{"display":result}}>
            <div className={styles.result_header}>
              <h1 className={styles.txt}>Result</h1>
            </div>
              <div className={styles.result}>
                <table>
                  <thead>
                    <tr>
                      <th className={styles.cell}>Heading</th>
                      <th className={styles.cell}>Remarks</th>
                      <th className={styles.cell}>Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {headings.map((heading, index) => (
                      <tr key={index}>
                        <td className={styles.cell}>{heading}</td>
                        <td className={styles.cell}>{remarks[index]}</td>
                        <td className={styles.cell}>{marks[index]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className={styles.outcome} style={{"backgroundColor":total >= 28 ? "green":"red"}}>
                {total >= 28 ? <h3>Success</h3>:<p>Failed</p>}
                <h3 style={{"marginLeft":"70%"}}>Total: {total}/40</h3>
              </div>
            </div>
          </div>
        </div>
        <div style={{"flexDirection":"column", "display": "flex", "width":"23%"}}>
          <button className={styles.tips} onClick={handleTips}>
            Tips <img className={styles.bulb} src="images/light-bulb.png"/>
          </button>
          <div className={styles.tipBox} style={{"display":tips}}>
            <h6>The project will be judged based on the following criteria. Make sure to mention each point to get the best results!</h6>
            <br/>
            <h5>Problem Statement (5 marks)</h5>
            <hr/> 
            <h6>
            <ul style={{"paddingLeft":"15px"}}>
              <li>Clearly state the problem your project solves.</li>
              <li>Provide evidence of the market gap or need.</li>
            </ul>
            </h6>
            <br/>
            <h5>Solution Viability (5 marks)</h5>
            <hr/> 
            <h6>
              <ul style={{"paddingLeft":"15px"}}>
                <li>Explain your innovative solution.</li>
                <li>Emphasize efficiency and cost-effectiveness.</li>
              </ul></h6>
            <br/>
            <h5>Team (5 marks)</h5>
            <hr/> 
            <h6>
            <ul style={{"paddingLeft":"15px"}}>
              <li>Highlight co-founder chemistry and collaboration.</li>
              <li>Specify team member skills and collaboration duration.</li>
            </ul></h6>
            <br/>
            <h5>USP (5 marks)</h5>
            <hr/> 
            <h6>
            <ul style={{"paddingLeft":"15px"}}>
              <li>Define your product's uniqueness in Pakistan.</li>
              <li>Describe the technology platform used.</li>
            </ul></h6>
            <br/>
            <h5>Viability (5 marks)</h5>
            <hr/> 
            <h6>
            <ul ></ul>
              <li>Explain how your product will thrive in the market.</li>
              <li>Highlight any competitive advantages</li></h6>
            <br/>
            <h5>Financials (5 marks)</h5>
            <hr/> 
            <h6>
            <ul style={{"paddingLeft":"15px"}}>
              <li>Detail revenue generation plans.</li>
              <li>Address sustainability post-incubation.</li>  
            </ul></h6>
            <br/>
            <h5>Market Size (5 marks)</h5>
            <hr/> 
            <h6>
            <ul style={{"paddingLeft":"15px"}}>
              <li>Demonstrate understanding of your target market.</li>  
              <li>Provide key market size insights.</li>
            </ul></h6>
            <br/>
            <h5>Business Model (5 marks)</h5>
            <hr/> 
            <h6>
            <ul style={{"paddingLeft":"15px"}}>
              <li>Present a structured business model.</li>
              <li>Address potential challenges and mitigations.</li>
            </ul>
            </h6>
          </div>
        </div>
        </div>
    </>
  );
};

export default Ideainsight;