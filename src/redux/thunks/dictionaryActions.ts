import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateCounter } from "../../redux/dictionarySlice";
import { updateDictionaryInBD } from "../../utils/updateDictionaryToBD";
import { transformationObjToBD } from "../../utils/transformationObjToBD";
import { ITestResult } from "../../redux/testSlice";
import { IDictionary } from "../../redux/dictionarySlice";

export const updateAndPullDictionary = createAsyncThunk(
  "dictionary/updateAndSave",
  async (testResults: Array<ITestResult>, { dispatch, getState }) => {
    dispatch(updateCounter(testResults));
    const updatedDictionary = (getState() as { dictionary: IDictionary })
      .dictionary;
    const entriesObject = transformationObjToBD(updatedDictionary, testResults);
    await updateDictionaryInBD(entriesObject);
  }
);
