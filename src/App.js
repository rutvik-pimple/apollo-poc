import './App.css';
import JobCard from './components/JobCard';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";


const JobList = gql`
query {
  jobs {
    id
    title
    slug
    company {
      name
      slug
    }
    locationNames
    cities {
      name
      country {
        name
      }
    }
    remotes {
      name
      slug
    }
  }
}
`;

function JobsListing() {
  const { loading, error, data } = useQuery(JobList);
  console.log(data)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.jobs.map((job) => (
    <div key={job.id}>
      <JobCard job = {job} />
    </div>
  ));
}

function App() {
  return (
    <div className="App">
      <JobsListing />
    </div>
  );
}

export default App;
