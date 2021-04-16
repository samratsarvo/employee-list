import React, { Fragment, useState } from "react";
import { Avatar } from 'antd';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Typography, Button, Grid} from '@material-ui/core';
import Collapse from 'react-bootstrap/Collapse'
import data from "./data.json";
// import "bootstrap/dist/css/bootstrap.min.css";

const Hierarchy = (props) => {
  const { data } = props
  const [employee,setEmployee] = useState(data)
  const [open, setOpen] = useState(false);

  return (
              <div>
                <Grid align='center'>
                  <Button
                  onClick={() => setOpen(!open)}
                  aria-controls="collapse-text"
                  aria-expanded={open}
                  >
                  ...
                  </Button>
                </Grid>
              <Collapse in={open}>
                
                  <ul>
                  <div id="collapse-text">
                    {employee.map((item) => (
                      <Fragment key={item.name}>
                        <li>
                          <div className="card" > 
                          <div className="card-body" >
                          <Avatar> <AccountCircleIcon/> </Avatar>
                          <Typography gutterBottom variant="h5" component="h2" >
                            <b>{item.name}</b><br/>
                          </Typography>
                          <Typography variant="body2"  component="p">
                            {item.designation}<br/>
                          </Typography>
                          <Typography variant="body2"  component="p">
                            <h3 style={{color:'blue'}} >{item.supervisee}</h3>
                          </Typography>
                            </div>
                            </div>         
                          {item.children?.length && <Hierarchy data={item.children} />}
                        </li>
                      </Fragment>
                    ))}
                    </div>
                  </ul>
                
              </Collapse>
            </div>
                );
              };

const Chart = (props) => {
  return (
    <div className="org-tree">
      <Hierarchy data={data} />
    </div>
  );
};

export default Chart;

// return (
//   <ul>
//     {employee.map((item) => (
//       <Fragment key={item.name}>
//         <li>
//         <div className="card" > 
//         <div className="card-body" >
//         <Avatar> <AccountCircleIcon/> </Avatar>
//         <Typography gutterBottom variant="h5" component="h2" >
//           <b>{item.name}</b><br/>
//           </Typography>
//           <Typography variant="body2"  component="p">
//           {item.designation}<br/>
//           </Typography>
//           <Typography variant="body2"  component="p">
//           <h3 style={{color:'blue'}} >{item.supervisee}</h3>
//           </Typography>
//           </div>
//           </div>         
//           {item.children?.length && <Hierarchy data={item.children} />}
//         </li>
//       </Fragment>
//     ))}
//   </ul>
// );
// };