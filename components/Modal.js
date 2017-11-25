import ReactDOM from 'react-dom';
import { Line, Circle } from 'rc-progress';
import TypeformButton from '../components/TypeformButton'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const _ = require('lodash'); //get lodash library


const round = (v) =>  {
	if (v) {
		return Number((v).toFixed(0));		
	}
}

const setProgProp = (v) => {
	if (v) {
		return round(v/5 * 100);
	}
	return 0;
}

const setCostProgProp = (v, max) => {
	if (v) {
		return round(v/max*100);
	}
	return 0;
}

const showProps = (v) => {
	return v.join(' ');
}

const getTopProps = (a) => {
	return a.map((v) => v.name).join(", ");
}

class Modal extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    tabIndex: 0
	  };
	}

	componentDidMount() {
		document.addEventListener('mousedown', this._handleClick, false);
		document.body.classList.toggle('modalOpen', true);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this._handleClick, false);
	}

	_handleTabClick = (i, e) => {
		// this.setState({
		// 	tabIndex: i
		// });
	}

	render() {
		console.log("MODAL PROPS", this.props);

		const { city, uni } = this.props;

		const i = this.state.tabIndex;
		const addActive = (n) => { 
			const ret = i === n ? "active" : "nothing";
			return ret;
		};

	  return (
			<div 
				className={"backModal fixed z-1 flex content-center justify-center items-center"}
				onClick={this.props._handleModalCloseClick}> 
				<div className={"absolute modal top-0 top-1-l mb0 mb1-l shadow-3 w-100 w-80-l" }>
					<div className="flex tc flex-column">
						<div 
							className="flex bg-img"
							style={{ "backgroundImage": `url("https://s3.eu-central-1.amazonaws.com/erasmoose/${this.props.uni._id}.jpg")` }} 
						>	
							<div className="absolute z-1 bottom-2 white tc left-0 right-0">
								<div className="b pt3 f3 f2-l text-shadow">{this.props.uni.name}</div>
								<div className="f4 f3-l pb3 i playfair text-shadow">{this.props.uni.website}</div>
								<TypeformButton id={this.props.uni._id} cityid={this.props.uni.city_id} className="ma2 mh4 ur-btn tc flex justify-center content-center items-center" />
							</div>	
						</div>
						<Tabs className="flex flex-column tl f7 no-pad" selectedTabClassName="active">
							<TabList className="flex">
								<Tab className="flex justify-center flex-auto f5 b z-1 pv3 bw1 b--light-gray pointer bb ttu moon-gray">Overview</Tab>
								<Tab className="flex justify-center flex-auto f5 b z-1 pv3 bw1 b--light-gray pointer bb ttu moon-gray">City</Tab>
								<Tab disabled className="flex justify-center flex-auto f5 b z-1 pv3 bw1 b--light-gray pointer bb ttu moon-gray">Activities</Tab>
							</TabList>
							<TabPanel className="flex flex-auto">
								<div className="flex flex-auto pv4 ph4 flex-column white">

									{/* Uni */}
									{/* ---------------------------------- */}
									<div className="f3 b black pt3 tc tl-l">University Metrics</div>
									<div className="flex flex-column flex-row-l black">
										<div className="flex flex-1 flex-column justify-center modal-card mt3 mr3 pv3 ph3">
											<div className="f4 b circle flex pb4">
												<span className='inside-circle'>{`${setProgProp(_.get(uni,'uni_rating.value',0))}/100`}</span>
												<Circle className="pv2 mr3 w-100" percent={setProgProp(_.get(uni,'uni_rating.value',0))} strokeWidth="5
													" trailWidth="5" strokeColor="#F44A4A" />
											</div>
											<div className="f5 pv1">Country: <span className="b">{uni.country}</span></div>
											<div className="f5 pv1">Ranking (Int/Nat): <span className="b">Coming soon</span></div>
											<div className="f5 pv1">Flagship Areas: <span className="b">{getTopProps(uni.main_disciplines)}</span></div>
											<div className="f5 pv1">Languages: <span className="b">{getTopProps(uni.languages)}</span></div>
											<div className="f5 pt2">Tuition Fees: <span className="b">{uni.fees.value ? uni.fees.value + " €" : "coming soon"}</span> </div>
											<div className="f5 pt2">Weekly Hours of Work: <span className="b">{uni.weekly_hours.value ? round(uni.weekly_hours.value) + " hours" : "coming soon"}</span> </div>
										</div>
										<div className="flex flex-1 flex-column justify-end modal-card mt3 mr3 pv3 ph3">
											<div className="f5 pt2">Difficulty: </div>
											<Line className="flex pv1" percent={setProgProp(_.get(uni,'difficulty.value',0))} strokeWidth="3" trailWidth="3" strokeColor="#22BAD9" />
											<div className="f5 pt2">International Orientation: </div>
											<Line className="flex pv1" percent={setProgProp(_.get(uni,'int_orientation.value',0))} strokeWidth="3" trailWidth="3" strokeColor="#22BAD9" />
											<div className="f5 pt2">Openness: </div>
											<Line className="flex pv1" percent={setProgProp(_.get(uni,'openness.value',0))} strokeWidth="3" trailWidth="3" strokeColor="#22BAD9" />
											<div className="f5 pt2">Gender Ratio (Women/Men): </div>
											<Line className="flex pv1" percent={_.get(uni,'female_percentage.value',0)} strokeWidth="3" trailWidth="3" strokeColor="#22BAD9" />
											<div className="f5 pt2">Research Opportunities: </div>
											<Line className="flex pv1" percent={setProgProp(_.get(uni,'opportunities.value',0))} strokeWidth="3" trailWidth="3" strokeColor="#22BAD9" />
											<div className="f5 pt2">Job/Internship Opportunities: </div>
											<Line className="flex pv1" percent={setProgProp(_.get(uni,'opportunities.value',0))} strokeWidth="3" trailWidth="3" strokeColor="#22BAD9" />
											<div className="f5 pt2">Organization and Student Clubs: </div>
											<Line className="flex pv1" percent={setProgProp(_.get(uni,'clubs.value',0))} strokeWidth="3" trailWidth="3" strokeColor="#22BAD9" />
											<div className="f5 pt2">Student Parties: </div>
											<Line className="flex pv1" percent={setProgProp(_.get(uni,'party.value',0))} strokeWidth="3" trailWidth="3" strokeColor="#22BAD9" />
										</div>
									</div>

									<div className="black pb0 pt3">
										<div className="f3 b">Latest Reviews</div>
										<div className="f5 gray">The main metrics and such</div>
									</div>
									<div className="flex black">
										<div className="flex flex-auto review flex-column justify-center modal-card mt3 mr2 pv3 grad-green relative">
											<div className="i pv3 ph4 tc white f5">
												"The best uni everrrr! Super international! The place to go if you wanna get turnt!
											</div>
											<div className="b pv3 ph4 tc white f6">
												4 hours ago
											</div>
											<button className="absolute bottom-1 right-1 upvote pointer">42</button>
										</div>
										<div className="flex flex-auto review flex-column justify-center modal-card mt3 ml2 mr2 pv3 grad-blue relative">
											<div className="i pv3 ph4 tc white f5">
												"The best uni everrrr! Super international! The place to go if you wanna get turnt!
											</div>
											<div className="b pv3 ph4 tc white f6">
												4 hours ago
											</div>
											<button className="absolute bottom-1 right-1 upvote pointer">42</button>
										</div>
										<div className="flex flex-auto review flex-column justify-center modal-card mt3 ml2 pv3 grad-purple relative">
											<div className="i pv3 ph4 tc white f5">
												"The best uni everrrr! Super international! The place to go if you wanna get turnt!
											</div>
											<div className="b pv3 ph4 tc white f6">
												4 hours ago
											</div>
											<button className="absolute bottom-1 right-1 upvote pointer">42</button>
										</div>
									</div>
								</div>
							</TabPanel>	
							<TabPanel className="flex flex-auto">
								<div className="flex flex-auto pv4 ph4 flex-column white">

									{/* City */}
									{/* ---------------------------------- */}
									<div className="f3 b black pt3 tc tl-l">{city.name} City Metrics</div>
									<div className="flex flex-column flex-row-l black">
										<div className="flex flex-1 flex-column justify-center modal-card mt3 mr2 pv3 ph3">
											<div className="f4 b circle pb4 flex">
												<span className='inside-circle'>{`${setProgProp(_.get(city,'city_rating.value',0))}/100`}</span>
												<Circle className="pv2 mr3 w-100" percent={setProgProp(_.get(city,'city_rating.value',0))} strokeWidth="5
													" trailWidth="5" strokeColor="#F44A4A" />
											</div>
											<div className="f5 pv1">Size: <span className="b">coming soon</span></div>
											<div className="f5 pv1">Weather (Winter/Spring): <span className="b">coming soon</span></div>
											<div className="f5 pv1">Sunny Days: <span className="b">coming soon</span></div>
											<div className="f5 pt2">Student Friendliness: </div>
											<Line className="flex pv1" percent={setProgProp(_.get(city,'student_friendliness.value',0))} strokeWidth="3" trailWidth="3" strokeColor="#22BAD9" />
											<div className="f5 pt2">Travel Options: </div>
											<Line className="flex pv1" percent={setProgProp(_.get(city,'travel_options.value',0))} strokeWidth="3" trailWidth="3" strokeColor="#22BAD9" />
											<div className="f5 pt2">Cultural Offering: </div>
											<Line className="flex pv1" percent={setProgProp(_.get(city,'culture.value',0))} strokeWidth="3" trailWidth="3" strokeColor="#22BAD9" />
											<div className="f5 pt2">Nightlife: </div>
											<Line className="flex pv1" percent={setProgProp(_.get(city,'nightlife.value',0))} strokeWidth="3" trailWidth="3" strokeColor="#22BAD9" />
											<div className="f5 pt2">Gastronomy: </div>
											<Line className="flex pv1" percent={setProgProp(_.get(city,'gastronomy.value',0))} strokeWidth="3" trailWidth="3" strokeColor="#22BAD9" />
											<div className="f5 pt2">Sports: </div>
											<Line className="flex pv1" percent={setProgProp(_.get(city,'sports.value',0))} strokeWidth="3" trailWidth="3" strokeColor="#22BAD9" />
										</div>
										<div className="flex flex-1 flex-column justify-end modal-card mt3 mr2 pv3 ph3">
											{/* Cost */}
											{/* ---------------------------------- */}
											<div className="f5 b pt4">Student Cost of life</div>
											<div className="f5 pv1">Monthly Cost: <span className="b">{round(_.get(city,'monthly_cost.value',0))} €/m</span></div>
											<div className="f5 pt2">Rent: </div>
											<Line className="flex pv2" percent={setCostProgProp(_.get(city,'rent_cost.value',0), 800)} strokeWidth="3" trailWidth="3" strokeColor="#22BAD9" />
											<div className="f5 pt2">Beer in a Pub: </div>
											<Line className="flex pv2" percent={setCostProgProp(_.get(city,'beer_cost.value',0), 8)} strokeWidth="3" trailWidth="3" strokeColor="#22BAD9" />
											<div className="f5 pt2">Coffee: </div>
											<Line className="flex pv2" percent={setCostProgProp(_.get(city,'coffee_cost.value',0), 8)} strokeWidth="3" trailWidth="3" strokeColor="#22BAD9" />
											<div className="f5 pt2">Kebab: </div>
											<Line className="flex pv2" percent={setCostProgProp(_.get(city,'kebab_cost.value',0), 10)} strokeWidth="3" trailWidth="3" strokeColor="#22BAD9" />
											<div className="f5 pt2">Entry fee Club: </div>
											<Line className="flex pv2" percent={setCostProgProp(_.get(city,'danceclub_cost.value',0), 30)} strokeWidth="3" trailWidth="3" strokeColor="#22BAD9" />
										</div>
									</div>

									<div className="black pb0 pt3">
										<div className="f3 b">Latest Reviews</div>
										<div className="f5 gray">The main metrics and such</div>
									</div>
									<div className="flex black">
										<div className="flex flex-auto review flex-column justify-center modal-card mt3 mr2 pv3 grad-green relative">
											<div className="i pv3 ph4 tc white f5">
												"The best uni everrrr! Super international! The place to go if you wanna get turnt!
											</div>
											<div className="b pv3 ph4 tc white f6">
												4 hours ago
											</div>
											<button className="absolute bottom-1 right-1 upvote pointer">42</button>
										</div>
										<div className="flex flex-auto review flex-column justify-center modal-card mt3 ml2 mr2 pv3 grad-blue relative">
											<div className="i pv3 ph4 tc white f5">
												"The best uni everrrr! Super international! The place to go if you wanna get turnt!
											</div>
											<div className="b pv3 ph4 tc white f6">
												4 hours ago
											</div>
											<button className="absolute bottom-1 right-1 upvote pointer">42</button>
										</div>
										<div className="flex flex-auto review flex-column justify-center modal-card mt3 ml2 pv3 grad-purple relative">
											<div className="i pv3 ph4 tc white f5">
												"The best uni everrrr! Super international! The place to go if you wanna get turnt!
											</div>
											<div className="b pv3 ph4 tc white f6">
												4 hours ago
											</div>
											<button className="absolute bottom-1 right-1 upvote pointer">42</button>
										</div>
									</div>
								</div>
							</TabPanel>				
						</Tabs>
						<div className="dn flex-l controls absolute f1">
							<div className="flex left z-0">
								<i className="fa fa-angle-left z-1" aria-hidden="true" onClick={this.props._handleModalLeftClick}></i>
							</div>
							<div className="flex right justify-end f1 z-0" >
								<i className="fa fa-angle-right z-1" aria-hidden="true" onClick={this.props._handleModalRightClick}></i>
							</div>
						</div>
					</div>
					<div className="red f1 z-1 absolute ph3 right-0 top-0 pointer close" onClick={this.props._handleModalCloseClick}>
						x
					</div>
				</div>
			  <style jsx>
					{`
						.circle {
							position: relative;
						}
						.inside-circle {
			    	  position: absolute;
			    	  top: 43%;
			    	  left: 50%;
			    	  transform: translate(-50%, -50%);
			    	}
			    	.review {
			    		width: 275px;
			    		height: 250px;
						}
			    	.grad-blue {
			    		background-image: linear-gradient( 135deg, #90F7EC 10%, #32CCBC 100%);
			    	}
			    	.grad-pink {
			    		background-image: linear-gradient( 135deg, #FFF6B7 10%, #F6416C 100%);
			    	}
			    	.grad-purple {
			    		background-image: linear-gradient( 135deg, #CE9FFC 10%, #7367F0 100%);
			    	}
			    	.grad-green {
			    		background-image: linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%);
			    	}
			    	.grad-orange {
				    	background-image: linear-gradient( 135deg, #FCCF31 10%, #F55555 100%);
			    	}
			    	.blue {
			    		color: #F44A4A;
			    	}
			    	.hidden {
			    		display: none;
			    	}
			    	.upvote {
			    		background-color: transparent;
			    	}
			    	.upvote::before {
			    		-webkit-align-self: center;
			    		-ms-flex-item-align: center;
			    		align-self: center;
			    		border-color: transparent transparent #fff transparent;
			    		border-style: solid;
			    		border-width: 0 4px 6px 4px;
			    		content: "";
			    		height: 0;
			    		margin-right: 5px;
			    		width: 0;
			    	}
			    	.bg-oj {
			    		background-color: #ED6863;
			    		color: white;
			    	}
			    	.data-row:hover .hidden {
			    		display: flex;
			    	}
			    	.flex-1 {
			    		flex: 1;
			    	}
			    	.flex-4 {
			    		flex: 2;
			    	}
			    	@media screen and (min-width: 60em) {
			    		.flex-4 {
			    			flex: 4;
			    		}
			    	}
			    	.flex-5 {
			    		flex: 5;
			    	}
			    	.bg-img {
			    		background-size: cover;
			    		background-repeat: no-repeat;
			    		background-position: center center;
			    		min-height: 30vh;
			    		border-top-right-radius: 6px;
			    		border-top-left-radius: 6px;
			    		position: relative;
			    	}

			    	.bg-img ::before {
					    position: absolute;
					    top: 0;
					    right: 0;
					    left: 0;
					    bottom: 0;
					    background-color: rgba(0,0,0,0.3);
					    content: "";
					    border-radius: 10px;
						}
			      .backModal {
			        background: rgba(30,30,30,0.9);
			        top: 0;
			        left: 0;
			        width: 100%;
			        height: 100%;
			        overflow-y: scroll;
			        box-sizing: border-box;
			        -webkit-overflow-scrolling: touch;
			      }
			      .modal {
			      	background-color: white;
			      	max-width: 920px;
			      	position: absolute;
			      	z-index: 9997;
			      	background-position: fixed;
			      	box-sizing: border-box;
			      	border-radius: 6px;
			      	min-height: 90vh;
			      }
			      .controls {
			      	left: -70px;
			      	right: -70px;
			      	top: 50%;
			      	margin: -20px auto 0;
			      }
			      .right, .left {
			      	flex: 1;
			      	cursor: pointer;
			      	color: #F44A4A;
			      	padding: 0 10px
			      }
			      .stretch {
			      	position: absolute;
			      	left: 0;
			      	right: 0;
			      	top: 0;
			      	bottom: 0;
			      }
			    `}
			  </style>
			</div>
	  );
	}
}
export default Modal;

