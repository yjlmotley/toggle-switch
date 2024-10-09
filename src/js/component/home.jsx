import React, { useState, useEffect } from 'react';
import ToggleSwitch from './ToggleSwitch.jsx';

const foodRestrictions = [
	"dairy", "eggs", "fish", "shellfish", "wheat", "soybeans",
	"sesame", "tree nuts", "peanuts", "pork", "beef"
];

export const Profile = () => {
	const [restrictions, setRestrictions] = useState({});

	useEffect(() => {
		// Simulating loading user preferences from an API
		const loadUserPreferences = async () => {
			// Replace this with actual API call
			const mockUserPreferences = {
				dairy: true,
				eggs: false,
				fish: true,
				// ... other preferences
			};
			setRestrictions(mockUserPreferences);
		};

		loadUserPreferences();
	}, []);

	const handleToggle = (restriction) => {
		setRestrictions(prev => ({
			...prev,
			[restriction]: !prev[restriction]
		}));
	};

	const handleSave = async () => {
		// Simulating saving user preferences to an API
		console.log("Saving preferences:", restrictions);
		alert("Preferences saved successfully!");
	};

	return (
		<div className="container">
			<h3 className="my-4 text-center">Toggle Switch Example</h3>
			<div className="container border rounded p-5">
				<div className="d-flex justify-content-center flex-column align-items-center">
					<h5 className="card-title mb-5 border rounded p-3">Food Restrictions</h5>
					<div className="row w-75">
						{foodRestrictions.map((restriction) => (
							<div key={restriction} className="col-md-6 mb-3 px-4">
								<div className="d-flex align-items-center justify-content-between">
									<span className="text-capitalize">{restriction}</span>
									<ToggleSwitch
										isOn={restrictions[restriction] || false}
										onToggle={() => handleToggle(restriction)}
									/>
								</div>
							</div>
						))}
					</div>
					<button onClick={handleSave} className="btn btn-dark mt-3">
						Save Preferences
					</button>
				</div>
			</div>
		</div>
	);
};

export default Profile;