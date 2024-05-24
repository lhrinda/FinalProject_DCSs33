import React, { useState } from "react";
import {
  Drawer,
  Button,
  Input,
  Typography,
  IconButton,
} from "@material-tailwind/react";

// modified from: https://www.material-tailwind.com/docs/react/drawer

export function AddNew({ setJsonInfo, jsonInfo, refreshTraxGallery }) {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const clearEntries = () => {
    setTitle("");
    setImage("");
  };

  const addToJson = () => {
    jsonInfo.push({
      title: title,
      image: image,
    });
    console.log(jsonInfo);
    refreshTraxGallery(); // trigger Gallery to refresh
  };

  return (
    <React.Fragment>
      <Button
        className="bg-bates-dark hover:bg-bates-light"
        onClick={openDrawer}
      >
        +
      </Button>
      <Drawer
        placement="right"
        open={open}
        onClose={closeDrawer}
        className="p-4"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            New Movie Entry
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <Typography>Title:</Typography>
            <Input
              size="lg"
              placeholder="Band Name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={bandName}
              onChange={(event) => setBandName(event.target.value)}
            />
          </div>
          <div>
            <Typography>Image URL:</Typography>
            <Input
              size="lg"
              placeholder="Song Name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={songName}
              onChange={(event) => setSongName(event.target.value)}
            />
          </div>
          <Button
            onClick={() => {
              closeDrawer();
              clearEntries();
              addToJson();
            }}
            className="mt-[8px] bates-button"
          >
            Add Movie
          </Button>
        </div>
      </Drawer>
    </React.Fragment>
  );
}
