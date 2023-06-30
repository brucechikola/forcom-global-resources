import { createSlice } from "@reduxjs/toolkit";
import { cvData as cv } from "mock/data";
const initialState = {
    cvData: cv,
    dashboard_content_active_page: 1,
    titles: [
        "",
        "Personal Info",
        "Cover Letter",
        "Work Experience",
        "Education",
        "Languages",
        "Skills",
        "Certifications",
        "Attachments",
        "Hobbies",
        "Links",
        "Miling",
    ]
}
export const cvData = createSlice({
    name: 'cvData',
    initialState,
    reducers: {
        setCVData: (state, action) => {
            state.cvData = action.payload
        },
        setDashboardContentActivePage: (state, action) => {
            state.dashboard_content_active_page = action.payload
        }
    },
})
export const {
    setCVData,
    setDashboardContentActivePage
} = cvData.actions
export default cvData.reducer