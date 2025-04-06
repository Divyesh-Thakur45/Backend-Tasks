import React from "react";
// import { FaGraduationCap } from "react-icons/fa";
// import { AiFillDollarCircle } from "react-icons/ai";
// import { BiSearch } from "react-icons/bi";
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <div className="sidebar">
                <div className="sidebar-header">
                    {/* <FaGraduationCap size={28} /> */}
                    <span>Dashboard</span>
                </div>
                <ul className="sidebar-menu">
                    <li>Payment Info</li>
                    <li>Registration</li>
                    <li>Courses</li>
                    <li>Drop Semester</li>
                    <li>Result</li>
                    <li>Notice</li>
                    <li>Schedule</li>
                </ul>
                <button className="logout-btn">Logout</button>
            </div>

            {/* Main Content */}
            <div className="main-content">
                {/* Header */}
                <div className="header">
                    <div className="search-box">
                        {/* <BiSearch className="search-icon" /> */}
                        <input type="text" placeholder="Search" />
                    </div>
                    <div className="profile">
                        <div className="avatar"></div>
                        <span>John Doe</span>
                    </div>
                </div>

                {/* Welcome Banner */}
                <div className="welcome-banner">
                    <div>
                        <p className="date">September 4, 2023</p>
                        <h2>Welcome back, John!</h2>
                        <p>Always stay updated in your student portal</p>
                    </div>
                    {/* <FaGraduationCap size={50} /> */}
                </div>

                {/* Finance Section */}
                <div className="finance-section">
                    <h3>Student Details</h3>
                    <div className="student-container">
                        <div className="row-std">
                            <div className="dp">
                                <img src="data:image/jpeg;base64,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" className="dpImg" alt="" />

                            </div>
                            <p className="name">🧒 Nikumbhe Divyesh shaileshBhai</p>
                            <p className="age">🗣️ 19 Year Old</p>
                            <p className="stream">🧑‍💻 BCA</p>
                            <p className="rank">😎 CGPA : 7.8</p>
                            <p className="more">More..👆
                                {/* <div className="btns">
                                    <button className="btn delete">Delete</button>
                                    <button className="btn create">Create</button>
                                    <button className="btn update">Update</button>
                                    <button className="btn view">View</button>
                                </div> */}
                            </p>
                        </div>
                        <div className="row-std">
                            <div className="dp">
                                <img src="data:image/jpeg;base64,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" className="dpImg" alt="" />

                            </div>
                            <p className="name">🧒 Nikumbhe Divyesh shaileshBhai</p>
                            <p className="age">🗣️ 19 Year Old</p>
                            <p className="stream">🧑‍💻 BCA</p>
                            <p className="rank">😎 CGPA : 7.8</p>
                            <p className="more">More..👆
                                {/* <div className="btns">
                                    <button className="btn delete">Delete</button>
                                    <button className="btn create">Create</button>
                                    <button className="btn update">Update</button>
                                    <button className="btn view">View</button>
                                </div> */}
                            </p>
                        </div>
                        <div className="row-std">
                            <div className="dp">
                                <img src="data:image/jpeg;base64,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" className="dpImg" alt="" />

                            </div>
                            <p className="name">🧒 Nikumbhe Divyesh shaileshBhai</p>
                            <p className="age">🗣️ 19 Year Old</p>
                            <p className="stream">🧑‍💻 BCA</p>
                            <p className="rank">😎 CGPA : 7.8</p>
                            <p className="more">More..👆
                                {/* <div className="btns">
                                    <button className="btn delete">Delete</button>
                                    <button className="btn create">Create</button>
                                    <button className="btn update">Update</button>
                                    <button className="btn view">View</button>
                                </div> */}
                            </p>
                        </div>
                        <div className="row-std">
                            <div className="dp">
                                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhIVFhUXFRcVFRcVFRUVFRUYFRUXFhUVFRUYHSggGBolGxYXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFQ8QFS0dFR0rKy0tLSstLS0rLS0rLS0tLS0rKy0rKzgtLS0tKy0tLS0tLTcrKzcrLTc3Ny0rLSstK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAgEDBAUGB//EAD4QAAEDAgMEBwYFAwQCAwAAAAEAAhEDIQQxQRJRYXEFgZGhscHwBhMiMkLRBxRysuFSYvEjgpKiVcIVNFP/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAHhEBAQEAAgIDAQAAAAAAAAAAAAERAkESMSFCUTL/2gAMAwEAAhEDEQA/APjzQmJUByZyilJSOVmyiFUZnqtwWl6rqDVWJVAQphQtIEAIQoIUoQgIQAhW0sM93ytJ8O1BUhaHYGoB8h46x1buKoc0ixEHjmghCAgBAIQgIBSEFCDU0BMQq2pllpY1S4JITqKSUxUhSgphCshCIiEwKhpTQioCV6cpXOQZ3JC5WPcqXFbZQVCEKoEAIQoBCFbQMX3EINuGwLRepc/0ie+PCRz0XSpPaLCmxvMtnsi3UuW2sr6LicgBzz61mtR0KmIaPmgbi4Eg8nOaAO9ZsUGu+Fwt9JadNwnLlkdwzTAmPm5/Dbr396zNpi7TAm7S35Z5fSeGR8IrmYinsuImdx3jQqtbzQ2mVDF27J6pcCPPqWCFuMWBS1QpagCgKCEINDHKwOVDXK5oyUqxcAjZSgp1lpEIhSSoaUEQpQhBWE7VTtWU0yqix5VZKYuVZKYIlIwCb74UKWZjmFpEVqUcjkmw9GbnLx4IZUiQbgxPZmFIrS4aCYAQUyoUlQUQLbgqQcI1vHHK3FYlqpBzQ15aYJMEg7Lhk4bjnB3WSkSMOBnWaBuG2T/xjxhdClhWAfI48akNHMM0702HdtXDqkZfMLncH/MeXaQqcbitklu24RmKeQPFxIk8h1lZaNUpNFxY8mR+xVg9fb95B9c87sWR9W0DrEHk4eaq2yXAMBk2AFzc/KNTfJMNdLBn53DIgXtGt+zTU93FK31yGsDR8xEnhN/BYCrEoTNSqQtICoKkZnrQ7M81Bf7uwIT0glpVY9cFZthStQ5QlLlIKypiUAJXJQUFkoVcoQUNKvDVkabq9jlqsxJCqcVdMWVFQpCl4pqeY5qtSzMc1URKanmOYSqWZjmEEKWeR8EOChAFaWVnlmyHOhpc4CcrSSN2RnkFmV2Eq7DwSLT8Q3g59yC/A4k7UkkmDEknIgmP9ocOtZKggkTN89/Fb8VgS2LsGyS0nbYJLTnE9ay/l3E2h36SCeMDPuRSUKLnmGgk+HPcvp/sP7LNpM99VaDVPySPkEEfDOpk3XD6H6Rw+H+J9KQPln4RO+/zu7St2N9vn1PhoNpsEjae50ua3Uta4NEj/dyXPlbfiNSSPFNdUw5qsI2Xlnuy6bhpILg0/wBwETuJGpXPK6XT1cvqknOAb3PxfEATrAcAucB1LpGahCFJREEJn5nmUpUuzPMoJafXcrgFnVrX2Six7vBMxyqqOy5Ia5RV7nqslSBKQZoIUq2AhBmGYV1ErO3NWUirRL3ZqtxUkqHFEKpZmOYUJqeY5jxVCoBQAgqCdOtQChMymTYAnkgiE1NhcYAk+s1pp4B31EDvPYLd61UaAZMTffuHruUtXFeJwry1pdMxAJkggHIa2k5W00VXR9CajWAnacQ0QCNnaOyXGeBK9Z+W99gBWaDtYV9SnVETNF9V76dYcGPe9p4OnRcfD1TTcKrS0OpkEFwJEzIBjQwpq42e3PRNHDvptpjZa6nNrw4EtJM7wB2Lz/ReFL6jQ0/UJdfZYBcvcdABfqXqavTFXGy97GsZSAAADnAvMwS4NIBgkAEjNX9GsaRXqOANOjRe585FzmkUqX6nOi24EfUkt9LXica122SQ4SSRtGSQTa+qoXZrMDrG95+/rgsr+jx9Lo4O+4+3WrKzYwKXaetSrK2Hc35mkccx2iyqVQKSiERaeKCESpi08YUIGccuSAUqAg1T8KpmCnZUsq3FRV3vghZkKolmY5qxgseRSUsxzHinpZH9JQVIQhAKWG45qEIALYzAEgEuABzzJE5Tz8wsjGyQN5A7Suy3uIjqKluLIqp4SmMwXfqMDsH3V06WA3Cw7AlafseYse9SstAKXGT60SOE6xyzTA/5t5IPdfhfix/r0iAfimDcOa9gFRpB0ytxK4nt57KnBv8AfUg52GefhIJ2qO1P+k86t0BPIzrf+HpPv6kAzsNcOMEhzOZFxxb1Gr8SPaWq9/5VofTpABxDgWuqzcEjMNsLbxe4tJ/R04fQdN9Z4w+Ga8vcSRtu/wBOmPqqEXgDfyzsF7L2x6OpYTA0sOxx+KqJJsar7OqVX9QgDQEbgvK+wPTNWhiQGNL2PtUYBfZaCdoHQtvwvC9B+IuI2n0ZmXbTmggtLabRstlpuC5z3G+4bkvsnp5NQg+ojzStaRmSb6xa3BUWNcRl65qqrh2Ozbsne23dkrFE+E9iDC/AGfhIM77HfyyCyOEGDyXYBueAjrNz3R2lc3Gth7uc9q1KzYpm0KEBCqGbry8woCnaspizurxQKCglQhAKVCEDUsxzHimpmx/Sfuooj4hzHihh/a7wKKREIQiGdkOrzSptPXFKgtwxgk6gEjzPUJK6LaggEZG3rsK5uHqbLgVpjZOz9LvlO46dhUsWNQf8Ub79x8x3p1zHvI5td6Hcuix4OXr1dZsWVDTcjkR4HyTqn3nxN5lh68u8Aq5Fej/D+vs4zZ0fSeOtrmOHmtP4p02n8uY+LaeyddnQHuPWVzPY+2MpHcKncza8lf8AiVUP5umzSzxwmGn9vep9l6dL8Lujqfu6taPiLhTBzhuyx5A5lwn9IXK9uqk40zctpNnhtEkNHAADrJOq6X4YYr4alL9FTta5h/a3tXn/AGhrbeLxDtNvZHJrQPup3TpgQXXjcPH/AB3oWeg+SSNTcnIbgN5haRpWao7ZndBI7CCO2FoWCq+XRpcHlMnuCsStVEwANY2j4+Nlm6Sbdp3gjsP8qGVDtDe4gu8h1Zq7HtlvI/wnY5yCiULTIGvLzCtP18x+5VK3R/MfuRYqQhCIEIQgej8w5jxSt8j4KaZuOY8UqCYUJjklQM/IcvMpUz9OXmUqC2m2wPGD15T4LSGW2TJH/ZvGNRxCz4ac7Aazl/K1sdo1kjjYcxN1KsZK/OcrjIxkeatwlSI5x23HfbrT4mkYJMDWxKxsOfFUa8dT+oetxW1r5Advv9+9ZKVWW33SOf1Dz6+CnAVJBbuy5H+fFZqu97MVgzF0HHLbLTydSqBZvbPGe8xjXTMU6Y7pPeVlZW2S139Lmu7HgEdhK5+Oql1Uk6OjsMKSLXrfYXEBjqu84d5H+0sj9y4b37TnO/qe8/8Acp8FX2DI/wDzeD/xB/8AVUUvlHIHtv5oNfR9Oi6o1uJqGnRM7b2iXgbJPwiDJJEZaruOr9EURFOhicSRcF9U02ng4BrC2+4O8l5KqNp8f0ies/xCdwGvff8AhVE9OdJe+eXNpUqLRZjKLQ1oE6nN7t7j3LlA96sruk+PkEYamHOAOS0jRgqV5zPcOJO/gmx+Wevb9gtQgDcqcRSEWBLo1Jtz+yzquYgICFpkFO02d1eKRM02PLzCBUIQgEIQgAhCEDE2HWlUnIKEEk5cvMoAUIQbMOJNgDGpyH6R5lbC+BvPrIBc+lbMkToPmP2Whpd+nvcesqVqKsXUJsewZdbtVkVlZxkiSb71WrGatoO09CNRy8JT0nbD75a7oOvLXqVNM9XHctDmSIOYv/I4eCLG6qyZG8EdcEd/kuSH/FJ3yV6XBdD13e4Y9uwa7QaTnmGPaMn7QnKLjMWtcLpu/D+j/wCY6OHA12W4fMpCvJfmCWuO/aHaw/dbjbPIC/Jo/hd5vsIwER0t0YRM/wD2Wgm4+y53tV0O7Ctb/rUazas7L6FT3jPhI2gXQIOVr584mK4FGqS5x3yY68u9RVeSY18P5VNOpBkKdrXetYmoc6wA/wAqGuIMjNQmpAkgD1xRG6jObjJ8D/SOO/crzlxPj9vss7HjP6RZozJOp4/yVaDF4l2g0bzdv39iy051ZkOISK3Ei4vNhffxVS0yEIKEAhCEAhCEAhCEEk2ChClo3oIUtKhNTMHj4cUGilY73awJI5n1zVj3nh1vaD4+apYdM5ybl1uK30ahAtHUAB1Ddz7lK05dR2mXAerp6eEecmmN5EDtNl121joY3kWXa9kME2vi6YqDaY2XuBvtBsQ083FsjUSp5GOY72Jxv5f806k1lKAQX1abC8HLYY5wJJkRa9onV+jehDRZ+YxlKr7lpEMaIqEnUnOmyMyYmRvX0/pnpH3uOpB1wyg6qwaS5zWhw4gbQB/vO9eax/tLUw9UtrMZVwtUyHNO0W+8aJa7Tq3LPlavjjDjul8GMK+jhn1A18uZSe4VG03ljg5zC746VnOm97jVfPnPkAQLbgATz3r1vSOD6OJ95h6z2T9BBIbI0+0rzGMw7WEbNQPBEgix6xJha4pWaF3ejejK1fDbFGm6o735MNGQ92LnQadi53R+FY8n3lUU2iLkbRM7myJ43X0H2Ux3R+EpuBxrnEukgN2JkNGgcfp0IhOVSR4DpDoqvhzFai9l4l7SGk52dkeorNEXOeg+/wBl9dqe1rcQDQweGNdkQ7bYfdEnMPc/PeS7hE6Zh+HmEfWBquq0qdSBFJ7S2i92V3sJdTJMaESMxOzJz/V8fx8nUtdHrevrnSf4MbO0aGJ24EtZUbsz/aXtNjxjqGa+aV+ii1xaZa5pLXNcPiBBgjODda8pUxkofqjkCTHktYpwLCf1uJ7su1K3DhucxvJtPEac1a5gHDrMd8juU1WXEAuzBDonOQ4DOCsi21+7T+0xl1hYlqJQQhM/TkPBKiBCEIBCEIBCEIBCEIBCEIHpOg36+PBXtxJgnUm3BFLAPNzDR/dbu+6sPR/9/wD1/lS4vyZ9YBttPuPuup7P9LuovJaJLqbT2PJIHVZcKrh3NnUbx5jRKyqRskZgEd5+6YuvTYvpqrNKsx0uYDSN82OA2P2u6wN659Sqz4tirIfJNN7S2CbkbWQIPauXhqkG9wbOGUtJvE2nUcQEvuyDeTxF1MNRVplpv4g+CtwuKLPlA2jrBJzy/wAXSV3k/VI5/wCEtMDffj5H7rSNtJ4e69JrjMxt7DjOYzE9i9R0W2oWwzouib/PU92QOe1HivG12zu7R4nNXYXE2IqVaobuaZB5yfJZsWV9S6Pp46Nn8zgqA+llNjXR1E26l2KOHqkvZXrU6m03ZIYwszBaTdx5W3aZL5HhcVg2GXUKlT+4vLYO+2frNah7SbLHUcNTFIPMF5dL3aS953brAdyxeNa1939nunhVwtF7yNs0ml+7aDRt/frXyj8TKDW40vaABVpsqHi47TXHsY3vXKwXtWaLdinJADWtkWLWNYy+7a2STzIXF6c6YqVywutDAwXn4WkkX5ucrON1LQa4ynznhxVBqjQ28OHLcVmo4V7rgW3mw7TmtH/xjtXsH/LyC38Iqc6xGkSDwFx2RCzLTVwb2jQjOWme7MdizKpUu8h4KEIRAhCEAhCEAhCEAhCEAtuBYBfXSfL7rEFfhqsOBJ4dqVY6Upkk3A3pisNKcSYvloTu3cx91z62eUHUaLdijLba26x6hYKhy5eBIHctRmnoObk4CN+7sWipghmJ7j4rE0cYXSw7jGy7TLcRzSkZAynMHa7R3iJC1NwlPSe37KvF0xmct+rfuOCzBxbbMabuYT2reMIzUT1n7qRsC5a2NDE34b1hFacyeI9ZodUvtOudBoBpKYmugcRrcdw5QNeAnqSPaD8T46/XdJWNtePiN3aDRqSpWJF8+4ckxdLVcJ+EQFZQIJl0Q0dWe7VUIlVl16dQu+LTT1pyTrHhq8hrersue7xVxq7tTA8z63LLa8FYcfQvtN1zA03mNy1sf4kdiqxDpFswbeBHipErmITVIkxlJjlNkq2yEIQgEIQgEIQgEIQgEIQg2MrTsbwYPWIlbgVxZXXpunsBWbGpVWNZF9HdztPXBc957dV2Xs2mkHX164hceqCDBzFleKUivoYkttmPBUIVR0BVBtofXoLC/dxQ18Ie6eaLpUShCIEIQgEIQgdjoB7O259cVowZuXH6W+vBZJTB9o3+SWK1YSrLv+R7YVPvJJ5k9qSm6J5R2qGDPkmBUIQiBCEIBCEIBCEIBCEIBCEIBb8M+zTuOyevLyWBacJcOb1j12KUjpt3euBWLpGl9Q5HyWik6QDwv4HvCdwmx1zWY04qE1RhBIOhhKtshCEIBCEIBCEIBCEIBCEIBPTFncvFzUidvynmB4n7IEQhCAQhCAQoUoBCEIBCEIBCEIBaMF83V5hCEvobcNkf1HxVqELDbmY35z1ftCoQhbjFCEIQCEIQCEIQCEIQCEIQCf6f9x8AhCBEIQgEIQgEIQg//9k=" className="dpImg" alt="" />

                            </div>
                            <p className="name">🧒 Nikumbhe Divyesh shaileshBhai</p>
                            <p className="age">🗣️ 19 Year Old</p>
                            <p className="stream">🧑‍💻 BCA</p>
                            <p className="rank">😎 CGPA : 7.8</p>
                            <p className="more">More..👆
                                {/* <div className="btns">
                                    <button className="btn delete">Delete</button>
                                    <button className="btn create">Create</button>
                                    <button className="btn update">Update</button>
                                    <button className="btn view">View</button>
                                </div> */}
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
