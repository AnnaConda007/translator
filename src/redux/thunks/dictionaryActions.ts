import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateCounter } from "../../redux/dictionarySlice";
import { IDictionary } from "../../redux/dictionarySlice";
import { ITestResult } from "../../redux/testSlice";
import { transformationObjToBD } from "../../utils/transformationObjToBD";
import { updateDictionaryEntries } from "../../utils/updateData/updateDictionaryEntries";

export const updateAndPullDictionary = createAsyncThunk(
  "dictionary/updateAndSave",
  async (testResults: Array<ITestResult>, { dispatch, getState }) => {
    dispatch(updateCounter(testResults));
    const updatedDictionary = (getState() as { dictionary: IDictionary })
      .dictionary;
    const entriesObject = transformationObjToBD(updatedDictionary, testResults);
    await updateDictionaryEntries(entriesObject);
  },
);
