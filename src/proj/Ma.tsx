import React from 'react';
import { useState,ChangeEvent } from 'react';
import './indexxx.css';
type Filters = {
    fromDate: string;
    toDate: string;
    region: string;
    entityName: string;
    sector: string;
    orgType: string;
    subSectors: string;
    statusNew: boolean;
    statusSent: boolean;
};

const Ma : React.FC = () => {
    const [filters, setFilters] = useState<Filters>({
        fromDate: "2025-02-18",
        toDate: "2025-02-18",
        region: "",
        entityName: "",
        sector: "",
        orgType: "",
        subSectors: "",
        statusNew: false,
        statusSent: false,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type, checked } = e.target;
        setFilters((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleReset = () => {
        setFilters({
            fromDate: "",
            toDate: "",
            region: "",
            entityName: "",
            sector: "",
            orgType: "",
            subSectors: "",
            statusNew: false,
            statusSent: false,
        });
    };
    
    return (
        <>

<div className="wrapper">
            <div className="main-content-wrapper">
                <div className="published-dates-section space-x-4">
                    <div>
                        <label>Published Date(s):</label>
                    </div>
                </div>
                <div className="filters-section space-x-4">
                    <div className="filter-column">
                        <div>
                            <label>From:</label>
                            <input
                                type="date"
                                name="fromDate"
                                value={filters.fromDate}
                                onChange={handleChange}
                            />
                            <p className="note">Note: Choose a date</p>
                        </div>
                        <div>
                            <label>To:</label>
                            <input
                                type="date"
                                name="toDate"
                                value={filters.toDate}
                                onChange={handleChange}
                            />
                            <p className="note">Note: Choose a date</p>
                        </div>
                    </div>
                    <div className="filter-column">
                        <div>
                            <label>Region</label>
                            <select name="region" value={filters.region} onChange={handleChange}>
                                <option value="">Select Region</option>
                                <option value="north">North</option>
                                <option value="south">South</option>
                                <option value="east">East</option>
                                <option value="west">West</option>
                            </select>
                        </div>
                        <div style={{ marginTop: "17.5px" }}>
                            <label>Org Type</label>
                            <input
                                type="text"
                                name="orgType"
                                value={filters.orgType}
                                onChange={handleChange}
                                placeholder="Enter Org Type"
                            />
                        </div>
                    </div>
                    <div className="filter-column">
                        <div>
                            <label>Entity Name</label>
                            <input
                                type="text"
                                name="entityName"
                                value={filters.entityName}
                                onChange={handleChange}
                                placeholder="Enter Entity Name"
                            />
                        </div>
                        <div style={{ marginTop: "17.5px" }}>
                            <label>Sub-Sectors</label>
                            <select name="subSectors" value={filters.subSectors} onChange={handleChange}>
                                <option value="">Select Sub-Sectors</option>
                                <option value="sub1">Sub-Sector 1</option>
                                <option value="sub2">Sub-Sector 2</option>
                            </select>
                        </div>
                    </div>
                    <div className="filter-column">
                        <div>
                            <label>Sector</label>
                            <select name="sector" value={filters.sector} onChange={handleChange}>
                                <option value="">Select Sector</option>
                                <option value="tech">Technology</option>
                                <option value="finance">Finance</option>
                                <option value="healthcare">Healthcare</option>
                            </select>
                        </div>
                        <div style={{ marginTop: "17.5px" }}>
                            <label>Status</label>
                            <div className="space-x-4 status-div">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="statusNew"
                                        checked={filters.statusNew}
                                        onChange={handleChange}
                                    />
                                    <span>New</span>
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="statusSent"
                                        checked={filters.statusSent}
                                        onChange={handleChange}
                                    />
                                    <span>Sent</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="button-container">
                    <button className="apply-filter-button">Apply Filter</button>
                    <button className="reset-button" onClick={handleReset}>Reset</button>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Ma;