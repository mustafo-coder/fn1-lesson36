import {
  Search as SearchIcon,
  LocationOn as LocationIcon,
} from "@mui/icons-material";
import React from "react";
import { Box, TextField, Button, Select, MenuItem } from "@mui/material";

export default function DreamCompany() {
  return (
    <div className="container mx-auto mt-36">
      <div className="flex-col justify-center flex items-center">
        <img
          className="text-[#515B6F]"
          src="/Headline.png"
          width={673}
          height={67}
          alt="image"
        />
        <p className="mt-5 w-[410px] opacity-40 h-[29px] items-center font-normal text-[18px] leading-[28.8px]">
          Find the dream companies you dream work for
        </p>
      </div>
      <div className="mx-auto flex justify-center items-center gap-9 h-[104px] mt-20 bg-white shadow-md  px-8">
        <div className="flex flex-col w-1/2">
          <div className="flex items-center gap-2">
            <SearchIcon sx={{ fontSize: 19 }} />
            <TextField
              fullWidth
              placeholder="Company name or keyword"
              variant="outlined"
              size="small"
              sx={{ input: { fontSize: 14, color: "#4a4a4a" } }}
            />
          </div>
          <div className="w-full h-[1px] bg-[#D6DDEB] mt-2"></div>
        </div>

        <div className="w-[1px] h-[56px] bg-[#202430]"></div>

        <div className="flex flex-col items-start w-[413px]">
          <div className="flex items-center gap-2">
            <LocationIcon sx={{ fontSize: 19 }} />
            <Select
              defaultValue="Florence, Italy"
              sx={{ fontSize: 14, color: "#4a4a4a", width: "100%" }}
              size="small"
            >
              <MenuItem value="Florence, Italy">Florence, Italy</MenuItem>
              <MenuItem value="Rome, Italy">Rome, Italy</MenuItem>
              <MenuItem value="Milan, Italy">Milan, Italy</MenuItem>
            </Select>
          </div>
          <div className="w-full h-[1px] bg-[#D6DDEB] mt-2"></div>
        </div>

        <div>
          <Button
            variant="contained"
            sx={{
              width: 113,
              height: 50,
              backgroundColor: "#4640DE",
              "&:hover": {
                backgroundColor: "#3B38C8",
              },
            }}
          >
            Search
          </Button>
        </div>
      </div>
      <p className="mt-2 flex left-10 opacity-40">
        Popular : Twitter, Microsoft, Apple, Facebook
      </p>
    </div>
  );
}
