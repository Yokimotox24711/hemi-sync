"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemText, Menu, MenuItem, TextField, Typography } from "@mui/material";
import MenuAppBar from "@/components/AppBar/AppBar";
import { useState } from "react";
import "./style.scss";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import CostStructureTable from "@/components/CostStructure/CostStructureTable";
import RevenueStreamTable from "@/components/RevenueStreamTable/RevenueStreamTable";

import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonIcon from '@mui/icons-material/Person';
import ChecklistIcon from '@mui/icons-material/Checklist';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import ItemEditMenu from "@/components/ItemEditMenu/ItemEditMenu";

export default function Home() {

  // Data
  const [partners, setPartners] = useState([
    // {
    //   name: "Thomas",
    //   function: "Founder",
    //   deal: "",
    // },
    // {
    //   name: "Kiosk Radio",
    //   function: "DJ Network Partner",
    //   deal: "",
    // },
    // {
    //   name: "Krayow",
    //   function: "Musicians Network Partner",
    //   deal: "",
    // },
    // {
    //   name: "Baluworld",
    //   function: "Model Network Partner",
    // },
    // {
    //   name: "Elements Envato",
    //   function: "Graphics Network Partner",
    // },
    // {
    //   name: "Ruben Annaert",
    //   function: "Graphics Partner",
    // },
    {
      name: "Bart",
      function: "Bose Records - Project Manager",
      deal: "",
    },
    {
      name: "Creo Cristoria",
      function: "Saxophone Player",
      deal: "",
    },
    {
      name: "Aaron De Grote",
      function: "DJ - House",
      deal: "",
    },
    {
      name: "Michiel De Meyer",
      function: "Drummer - Jazz",
      deal: "",
    },
    {
      name: "James Carter",
      function: "Pianist - Jazz",
      deal: "",
    },
    {
      name: "Rosalie",
      function: "Singer",
      deal: "",
    },
    {
      name: "Claire",
      function: "Model",
      deal: "",
    },
    {
      name: "Timothy",
      function: "Bass Player - Jazz",
      deal: "",
    },
    {
      name: "Nick A.",
      function: "Videographer",
      deal: "",
    },
    {
      name: "Ruben G.",
      function: "Graphic Designer",
      deal: "",
    }
  ])

  var activities = [
    {
      name: "Music Production",
      goal: "investments",
    },
    {
      name: "Photography",
      goal: "promotion",
    },
    {
      name: "Videography",
      goal: "promotion",
    },
    {
      name: "Video Editing",
      goal: "promotion",
    },
    {
      name: "Graphic Design",
      goal: "promotion",
    },
    // {
    //   name: "Street Photography",
    //   goal: "promotion",
    // },
    // {
    //   name: "Brand Deals",
    //   goal: "investments",
    // },
    // {
    //   name: "Project Launches",
    // },
  ]

  var valuePropositions = [
    {
      id: "1",
      name: "Brand Ambassador",
      type: "Brand Value",
    },
    {
      id: "2",
      name: "Brand Awareness",
      type: "Brand Value",
    },
    {
      id: "4",
      name: "Strengthen Brand Status",
      type: "Brand Value",
    },
    {
      id: "4",
      name: "Connects",
      type: "Product/Service Value",
    },
    {
      id: "4",
      name: "Fun/ Entertainment",
      type: "Product/Service Value",
    },
    {
      id: "4",
      name: "Makes Money",
      type: "Product/Service Value",
    },
    {
      id: "4",
      name: "Provides Wellness",
      type: "Product/Service Value",
    },
    {
      id: "4",
      name: "Attractiveness",
      type: "Product/Service Value",
    },
    {
      id: "4",
      name: "Provides Access",
      type: "Product/Service Value",
    },
    // {
    //   id:"1",
    //   name: "Start-Up Interactive Guide",
    //   type: "Product",
    // },
    // {
    //   id:"2",
    //   name: "Business Manager",
    //   type: "Product",
    // },
    // {
    //   id:"4",
    //   name: "Affiliate Program",
    //   type: "Product",
    // },
    // {
    //     name: "Blog",
    //     type: "Product",
    // },
    // {
    //     name: "E-commerce",
    //     type: "Product",
    // },
    // {
    //     name: "Cloud Integration",
    //     type: "Service",
    // },
    // {
    //     name: "Analytics Report",
    //     type: "Product",
    // },
    // {
    //     name: "Go To Market Plan",
    //     type: "Product",
    // },
    // {
    //     name: "SEO Optimization",
    //     type: "Service",
    // }
  ]

  var resources = [
    {
      name: "Camera",
      type: "Video Gear",
      owner: "James",
      seller: "Azure",
      cost_per_hour: 0.0001
    },
    {
      name: "Lights",
      type: "Video Gear",
      owner: "James",
      seller: "Azure",
      cost_per_hour: 0.0001
    },
    {
      name: "Record Shop",
      type: "Space",
      owner: "James",
      seller: "Azure",
      cost_per_hour: 0.0001
    },
    {
      name: "Microphone",
      type: "Audio Gear",
      seller: "Azure",
      cost_per_hour: 0.0001
    },
    {
      name: "Audio Interface",
      type: "Audio Gear",
      seller: "Azure",
      cost_per_hour: 0.0001
    },
    {
      name: "Audio System",
      type: "Audio Gear",
      seller: "Azure",
      cost_per_hour: 0.0001
    },
    {
      name: "Headphones",
      type: "Audio Gear",
      seller: "Azure",
      cost_per_hour: 0.0001
    },
    // {
    //   name: "Virtual Network",
    //   type: "Infrastructure",
    //   cost_per_hour: 0.0002
    // },
    // {
    //     name: "SQL Server",
    //     type: "Infrastructure",
    //     seller: "Azure",
    //     cost_per_hour: 0.00001
    // },
    // {
    //   name: "Web Server",
    //   type: "Infrastructure",
    //   seller: "Azure",
    //   cost_per_hour: 0.0001
    // },
    // {
    //     name: "Virtual Machine",
    //     type: "Infrastructure",
    //     seller: "Azure",
    //     cost_per_hour: 0.0003,
    // },
    // {
    //     name: "Kubernetes cluster",
    //     type: "Infrastructure",
    //     seller: "Azure",
    //     cost_per_hour: 0.0005,
    // },
    // {
    //     name: "Software Developer",
    //     type: "Employee",
    //     cost_per_hour: 0.0005,
    // }
  ]

  var channels = [
    {
      name: "Website",
      type: "Online",
    },
    {
      name: "Youtube",
      type: "Online",
      signal: "🛜",
    },
    {
      name: "Instagram",
      type: "Online",
      signal: "🛜",
    },
    {
      name: "Physical Store",
      type: "Offline",
    },
    {
      name: "Sales Team",
      type: "Offline",
    }
  ]

  var customers = [
    {
      name: "Music Enthusiasts",
      category: "Target Group",
    },
    {
      name: "Young Professionals",
      category: "Target Group",
    },
    {
      name: "Audiophiles",
      category: "Target Group",
    },
    {
      name: "Music Students and musicians",
      category: "Target Group",
    },
    {
      name: "Concert Goeres",
      category: "Target Group",
    },
    {
      name: "Social Infuencers",
      category: "Target Group",
    },
    {
      name: "Local Community",
      category: "Target Group",
    },
    {
      name: "Corporate Parnters & Employees",
      category: "Target Group",
    },
    {
      name: "Brand Advocates",
      category: "Target Group",
    },

  ]

  var customerRelations = [
    {
      activity: "Personalized Thank You Notes"
    },
    {
      activity: "Exclusive Discounts or Offers"
    },
    {
      activity: "Customer Feedback Surveys"
    },
    {
      activity: "VIP Events or Experiences"
    },
    {
      activity: "Branded Merchandise"
    },
    {
      activity: "Social Media Engagement"
    },
    {
      activity: "Loyalty Programs"
    },

  ]

  var costStructure = [
    {
      name: "Virtual Network",
      type: "Partner",
      interval: "monthly",
      ammount: 2000,
      date: "2021-10-01",
      payment_info: "Credit Card"
    }
  ]

  var balance = [
    {
      date: "2021-10-01",
      ammount: 2000,
    }
  ]

  var revenueStream = [
    {
      name: "Virtual Network",
      type: "Partner",
      interval: "monthly",
      ammount: 2000,
      date: "2021-10-01",
      payment_info: "Credit Card"
    }
  ]

  const addItem = () => {
    console.log("Add item");
  }

  const openAreaMenu = (e) => {
    e.preventDefault();
    console.log(e.target);
  }

  // Functions
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <main>
      <MenuAppBar></MenuAppBar>
      <div className="business-model-canvas">
        <Grid className="row first" container spacing={2}>
          {/* <Grid className="row first" style={{ flex: 4 }}> */}
          <Grid className="col">
            <div className="business-area partners">
              <div className='business-area__header'>
                <h2>Partners</h2>
                <button>...</button>
              </div>
              <div className="business-area__body">
                <List dense={true}>
                  {partners && partners.map((partner, idx) => (
                    <ListItem key={`partner-${idx}`} className="item"
                      secondaryAction={
                        <IconButton edge="end" aria-label="delete">
                          <MoreVertIcon />
                        </IconButton>
                      }
                    >
                      <ListItemAvatar>
                        <Avatar>
                          <PersonIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={partner.name}
                        secondary={partner.function ? partner.function : null}
                      />
                    </ListItem>
                  ))}
                </List>
              </div>
            </div>
          </Grid>

          <Grid className="col">
            <div className="business-area activities">
              <div className='business-area__header'>
                <h2>Activities</h2>
                <button>
                  ...
                </button>
              </div>
              <div className='business-area__body'>
                {(typeof activities !== undefined) && (
                  <>
                    <List dense={true}>
                      {activities.map((activity, idx) => (
                        <ListItem key={`activity-${idx}`} className="item"
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <MoreVertIcon />
                            </IconButton>
                          }
                        >
                          <ListItemAvatar>
                            <Avatar>
                              <FlashOnIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={activity.name}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </>
                )}
              </div>
            </div>
            <div className="business-area resources mt-2">
              <div className='business-area__header'>
                <h2>Resources</h2>
                <button>...</button>
              </div>
              <div className='business-area__body'>
                {(typeof resources !== undefined) && (
                  <>
                    <List dense={true}>
                      {resources.map((resource, idx) => (
                        <ListItem className="item"
                          key={`resource-${idx}`}
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <MoreVertIcon />
                            </IconButton>
                          }
                        >
                          <ListItemAvatar>
                            <Avatar>
                              <ViewInArIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={resource.name}
                            secondary={resource.type ? resource.type : null}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </>
                )}
              </div>
            </div>
          </Grid>
          <Grid className="col">
            <div className="business-area value-proposition">
              <div className='business-area__header'>
                <h2>Value Proposition</h2>
                <button>...</button>
              </div>
              <div className='business-area__body'>
                {(typeof valuePropositions !== undefined) && (
                  <>
                    <List dense={true}>
                      {valuePropositions.map((value, idx) => (
                        <ListItem key={`value-${idx}`} className="item"
                          secondaryAction={
                            <>
                              <ItemEditMenu id={value.id}></ItemEditMenu>
                            </>
                          }
                        >
                          <ListItemAvatar>
                            <Avatar>
                              <AutoAwesomeIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={value.name}
                            secondary={value.type ? value.type : null}
                          />

                          {/* <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                          >
                            <Box sx={style}>
                              <Typography id="modal-modal-title" variant="h6" component="h2">
                                {value.name}
                              </Typography>
                              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                {value.type}
                              </Typography>
                            </Box>
                          </Modal> */}

                        </ListItem>
                      ))}
                    </List>
                  </>
                )}
              </div>

            </div>
          </Grid>
          <Grid className="col">

            <div className="business-area channels">
              <div className='business-area__header'>
                <h2>Channels</h2>
                <button>
                  ...
                </button>
              </div>
              <div className='business-area__body'>
                {typeof channels !== "undefined" && (
                  <>
                    <List dense={true}>
                      {channels.map((channel, idx) => (
                        <ListItem key={`channel-${idx}`} className="item"
                          secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                              <MoreVertIcon />
                            </IconButton>
                          }
                        >
                          <ListItemAvatar>
                            <Avatar>
                              <CalendarViewDayIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={channel.name}
                            secondary={channel.type ? channel.type : null}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </>

                )}
              </div>
            </div>
            <div className="business-area customer-relations mt-2">
              <div className='business-area__header'>
                <h2>Customer Relations</h2>
                <div className="business-area__actions">
                  <button className="business-area__options" onClick={openAreaMenu}>...</button>
                  <div className="business-area__menu">
                    <button className="menu-item">Add</button>
                    <button className="menu-item">Generate</button>
                  </div>
                </div>
              </div>
              <div className='business-area__body'>
                {(typeof customerRelations !== undefined) && (
                  <List dense>
                    {customerRelations.map((customerRelation, idx) => (
                      <ListItem key={`customer-relationship-${idx}`} className="item"
                        secondaryAction={
                          <IconButton edge="end" aria-label="delete">
                            <MoreVertIcon />
                          </IconButton>
                        }
                      >
                        <ListItemAvatar>
                          <Avatar>
                            <InsertLinkIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={customerRelation.activity}
                        />
                      </ListItem>
                    ))}
                  </List>

                )}
              </div>
            </div>
          </Grid>
          <Grid className="col">
            <div className="business-area customers">
              <div className='business-area__header'>
                <h2>Customers</h2>
                <button>...</button>
              </div>
              <div className='business-area__body'>
                {(typeof customers !== undefined) && (
                  <List dense>
                    {customers.map((customer, idx) => (
                      <ListItem key={`customer-${idx}`} className="item"
                        secondaryAction={
                          <IconButton edge="end" aria-label="delete">
                            <MoreVertIcon />
                          </IconButton>
                        }
                      >
                        <ListItemAvatar>
                          <Avatar>
                            <PersonIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={customer.name}
                          secondary={customer.category ? customer.category : null}
                        />
                      </ListItem>
                    ))}
                  </List>
                )}
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid className="row second" container spacing={2}>
          <Grid className="col">
            <div className="business-area cost-structure">
              <div className='business-area__header'>
                <h2>Cost Structure</h2>
                <button>...</button>
              </div>
              <div className="business-area__body">
                <CostStructureTable className="custom-content-table"></CostStructureTable>
              </div>
              {/* <div className='table-wrapper'>
                {(typeof costStructure !== undefined) && (
                  <table className="interactive">
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Recurrance</th>
                        <th>Interval</th>
                        <th>Ammount</th>
                        <th>Date</th>
                        <th>Payment Info</th>
                      </tr>
                    </thead>
                    <tbody>
                      {costStructure.map(cost => (
                        <tr>
                          {(cost.name) && <td>{cost.name}</td>}
                          {(cost.type) && <td>{cost.type}</td>}
                          {(cost.type) && <td>{cost.type}</td>}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div> */}
            </div>
          </Grid>
          <Grid className="col">
            <div className="business-area balance">
              <div className='business-area__header'>
                <h2>Balance</h2>
                <button>...</button>
              </div>
              <div className="business-area__body">
                <table className="interactive">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Ammount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {balance.map((item, idx) => (
                      <tr key={`balance-${idx}`}>
                        <td>{item.date}</td>
                        <td>{item.ammount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Grid>
          <Grid className="col">
            <div className="business-area revenue-stream">
              <div className='business-area__header'>
                <h2>Revenue Stream</h2>
                <button>...</button>
              </div>
              <div className="business-area__body">
                <RevenueStreamTable className="custom-content-table"></RevenueStreamTable>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </main>
  );
}
