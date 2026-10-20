import Calculator from "../components/Calculator";
export default function Projects() {
    return (
        <>
            <h2>My Projects</h2>

            <h3>Planetary Weather Data Analysis</h3>
            <p>Global Career Accelerator - Intro to Python for Data</p>
            <p>
                Analyzed NASA weather datasets from Mars and Earth
                using Python and Pandas.
            </p>
            <p>
                Cleaned and merged data, created visualizations, and compared
                temperature trends between the two planets.
            </p>

            <h3>FastKitchen Customer Analysis</h3>
            <p>Global Career Accelerator - Data Wrangling with SQL</p>
            <p>
                Used SQL to analyze customer orders, spending patterns,
                and location-based trends.
            </p>
            <p>Practiced filtering, aggregation, and table joins.</p>

            <h3>GameJet Microtransactions</h3>
            <p>Global Career Accelerator - Data Wrangling with SQL</p>
            <p>
                Analyzed player spending patterns, revenue, and engagement
                using SQL.
            </p>
            <p>
                Used joins and aggregations to explore how different player
                types contribute to revenue.
            </p>

            <h3>Exploratory Analysis of Olympic Athletes</h3>
            <p>Global Career Accelerator - Intro to Python for Data</p>
            <p>Used Python to explore and analyze Olympic athlete data.</p>

            <h3>Capital Bikeshare Ride Analysis</h3>
            <p>Global Career Accelerator - Intro to Python for Data</p>
            <p>Used Python to explore and analyze bikeshare ride data.</p>

            <Calculator />
        </>
    );
}