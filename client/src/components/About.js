import React, { Component } from "react";

export class About extends Component {
	renderAbout() {
		return (
			<div>
				<section className="hero is-fullheight-with-navbar ">
					<section className="hero is-primary is-bold">
						<div className="hero-body">
							<div className="container">
								<h1 className="title">High school students</h1>
								<h2 className="subtitle">
									Find your perfect university
								</h2>
								<br />
							</div>
						</div>
					</section>
					<section className="hero">
						<div className="columns">
							<div className="column is-one-quarter " />
							<div className="column">
								<div className="hero-body">
									<div className="container ">
										<h1 className="title ">
											Our mission is to help students find
											the university experience that's
											right for them.
										</h1>
										<p>
											Applying for university can be a
											daunting task; there are so many out
											there it's impossible to know if one
											really is the right “fit” for you.
											The best way to learn what a school
											is like seems to be hearing about it
											from a student currently attending
											the school, but what if you don’t
											know anyone there?
										</p>
										<br />
										<p>
											Ohana hopes to solve this problem by
											connecting high school and
											university students that have a
											shared background. The shared
											experience of going to the same high
											school or growing up in the same
											city, for example, serves as a
											launching pad for exchange and
											conversation. The university student
											can help the high school student
											learn what life and education at the
											university is like whilst building a
											community.
										</p>
									</div>
								</div>
							</div>
							<div className="column is-one-quarter " />
						</div>
					</section>

					<section className="hero is-danger is-bold">
						<div className="hero-body">
							<div className="container has-text-right">
								<h1 className="title">University students</h1>
								<h2 className="subtitle">
									Help build a community
								</h2>
								<br />
							</div>
						</div>
					</section>
				</section>
				<div className="columns">
					<div className="column is-one-quarter" />
					<div className="column">
						<div className="hero-body">
							<div className="container ">
								<h1 className="title is-3 has-text-centered">
									Paying it forward - what I hope Ohana
									becomes
								</h1>
								<p>
									Applying for university was hard and
									stressful, but looking back at it now I can
									only see how fortunate I was. I went to a
									private school that had world class systems
									in place to help me apply where I wanted. I
									had upperclassmen and mentors that knew the
									process and could guide me through with
									ease. I had all the support in the world
									from my friends and family.
								</p>
								<br />
								<p>
									But most people don’t have it that easy.
									There are millions of students out there who
									deserve an education better than the one
									they’re getting, and not for a lack of
									trying. It’s just much harder for them
									because they don’t have the same support
									systems that I was fortunate enough to have.
									One of those is having a mentor that can
									guide them through the application process
									and help them maximize the chances of being
									accepted. I want Ohana to be that for them—a
									platform for those who’ve been through the
									process to help those in need of guidance.
								</p>
								<br />
								<p>
									This starts with us helping students not
									only by talking about what our university is
									like, but also by helping them with the
									application itself (especially helpful for
									students applying abroad that have no idea
									what to do). It’s a way to give back to the
									community and help those less fortunate. A
									way to pay it forward.
								</p>
								<br />
								<p>
									Ohana means family and family means nobody
									gets left behind or forgotten.
								</p>
							</div>
						</div>
					</div>
					<div className="column is-one-quarter" />
				</div>
			</div>
		);
	}

	render() {
		return <div>{this.renderAbout()}</div>;
	}
}

export default About;