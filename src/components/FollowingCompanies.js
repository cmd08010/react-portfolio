import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function FollowingCompanies(props) {
  const [companies, setCompanies] = useState({ data: [] });

  useEffect(() => {
    axios
      .get(`${props.API}/users/${props.userId}/followingCompanies`)
      .then(companies => {
        const companyCopy = { ...companies };
        setCompanies(companyCopy);
      });
  }, [props.userId, props.API]);

  return (
    <div className="companies bubble">
      <h3>Companies</h3>
      <p>You are following {companies.data.length} companies.</p>
    </div>
  );
}
