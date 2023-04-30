
import React from 'react';
import { useState } from 'react';
import "../../stylee.css"


import frame1 from '../../image/Frame1.png';
import frame2 from '../../image/Frame2.png';
import frame3 from '../../image/Frame3.png';
import frame4 from '../../image/Frame4.png';
import frame5 from '../../image/Frame5.png';
import footerlogo from '../../image/footerlogo.png';
import userff from '../../image/userff.png';
import icon from '../../image/Icon.png';
import { Link, StaticQuery, graphql } from 'gatsby';
import Layout from '../layout/layout';

export default function Whatsnew() {
	const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
	return (
		<StaticQuery
			query={graphql`
            query {
                allWpNews(sort: {date: DESC}) {
					edges {
					  node {
						excerpt
						id
						slug
						title
						featuredImage {
						  node {
							link
							sourceUrl
							date(formatString: "DD MMMM yyyy")
							author {
							  node {
								name
							  }
							}
						  }
						}
						link
					  }
					}
				  }
              }
            `}
			render={(data) => {
				const newses = data.allWpNews.edges.map((edge) => edge.node);
				const totalItems = newses.length;
				const totalPages = Math.ceil(totalItems / itemsPerPage);
				const startIndex = (currentPage - 1) * itemsPerPage;
				const endIndex = startIndex + itemsPerPage;

				const handlePageClick = (pageNumber) => {
					setCurrentPage(pageNumber);
				}

				const renderPageNumbers = () => {
					let pageNumbers = [];
					for (let i = 1; i <= totalPages; i++) {
						pageNumbers.push(
							<li key={i}>
								<a href="#" className={currentPage === i ? 'active' : null} onClick={() => handlePageClick(i)}>{i}</a>
							</li>
						);
					}
					return pageNumbers;
				}
				return (
					<Layout>
						<section class="section new00">
							<div class="secation01 bhg secn_abouts">
								<div class="container">
									<div class="row">
										<div class="col-md-12">
											<div class="our_main_heading text-center">
												<div class="bread_cumg">
													<h1 class="text-center"><strong>News </strong>  From QLSPACE</h1>
													<p>Get the latest updates and helpful information</p>
												</div>
											</div>
											<div class="img_arrow">
												<div class="roww_wrap">
													<a href="#"><img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/arrow.svg" /></a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
						<section class="section sectionnewss">
							<div class="whats_new_page">
								<div class="container">
									<div class="row">
										<div class="col-md-12">
											<div class="list_tab_wg">
												<ul>
													<li ><Link to='/app/event'>Events</Link></li>
													<li class="active_cl"><Link to='/app/whatsnew'>News</Link></li>
													<li><Link to='/app/blog'>Blogs</Link></li>
													<li><Link to='/app/partner'>Partner News</Link></li>
													<li><Link to='/app/videos'>Videos</Link></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="list_mnbv">
								<div class="container">
									<div class="row">
										{newses.slice(startIndex, endIndex).map((news) => {
											return (
												<div class="col-md-6" key={news.id}>
													<div class="our_lkhb">
														<div class="imh_bc">
															<div class="inner_ghv">
																<a href="https://www.qlspace.com.au/news/spacex-successfully-launches-10-space-force-tranche-0-satellites-after-abort-delay-lands-rocket/">
																	<img src={news.featuredImage.node.sourceUrl} className='img-fluid'/>
																</a>
															</div>
															<div class="date_wrad_news">
																<div class="date_rn">
																	<div class="date_icon"><span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/icon-_calendar-outline_.png" /></span>{news.featuredImage.node.date}</div>
																</div>
																<div class="oir_amin">
																	<div class="uhgbv"><span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/userfv.png" /></span>{news.featuredImage.node.author && news.featuredImage.node.author.node && news.featuredImage.node.author.node.name}</div>
																</div>
															</div>
															<div class="heading_nmb">
																<h4>
																	<Link to={news.link}>
																		{news.title}  </Link>
																</h4>
																<div class="next_page">
																	<Link to={`/news/${news.slug}`} className="read-more"> Read more
																		<span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/arrowright.png" /></span>
																	</Link>
																</div>
															</div>
														</div>
													</div>
												</div>
											)

										})}
										

										<ul className="pagination">{renderPageNumbers()}</ul>

									</div>
								</div>
							</div>
						</section>
						<section class="section">
							<div class="main_fot bhg">
								<footer class="footer_wrap">
									<div class="container">
										<div class="row">
											<div class="col-md-12">
												<h2>Subscribe to our newsletter</h2>
												<p>Lörem ipsum monomubegt håd epiv dide.</p>
											</div>
											<div class="col-md-12">
												<div class="our_news_leeter">
													<form class="row g-3">
														<div class="col-md-6">
															<div class="hfnfa">
																<input type="text" class="form-control" id="name" placeholder="Enter Name" />
																<div class="imgddds">
																	<img src={userff} alt="" />

																</div>
															</div>
														</div>
														<div class="col-md-6">
															<div class="hfnfa">
																<input type="text" class="form-control" id="email" placeholder="Enter Email" />
																<div class="imgddds">
																	<img src={icon} alt="" />

																</div>
															</div>
														</div>
														<div class="col-12">
															<button type="submit" class="btn btn-primary">Submit</button>
														</div>
													</form>
												</div>
											</div>
										</div>
									</div>
									<div class="our_main_footer">
										<div class="container">
											<div class="row">
												<div class="col-md-3">
													<div class="images_logo">
														<div class="logo_footer">
															<a href="#">
																<img src={footerlogo} alt="" />
															</a>
														</div>
														<div class="cont_footer">
															<p>Our goal is to develop cutting-edge space technology that accomplishes the incredible.</p>
														</div>
														<div class="list_s">
															<ul>
																<li><a href="#">
																	<img src={frame1} alt="" /></a></li>
																<li><a href="#"><img src={frame2} alt="" /></a></li>
																<li><a href="#"><img src={frame3} alt="" /></a></li>
																<li><a href="#"><img src={frame4} alt="" /></a></li>
																<li><a href="#"><img src={frame5} alt="" /></a></li>
															</ul>
														</div>
													</div>
												</div>
												<div class="col-md-3">

													<div id="myDIV" class="ythfr">
														<ul>
															<li class="btn_list active_list"><a href="#">Home</a></li>
															<li class="btn_list"><a href="#">About Us</a></li>
															<li class="btn_list"><a href="#">Solution</a></li>
															<li class="btn_list"><a href="#">Partner</a></li>
															<li class="btn_list"><a href="#">News Room</a></li>
														</ul>

													</div>

												</div>
												<div class="col-md-3">
													<div class="kn_list">
														<div class="kn_left_list">
															<div class="lefti_text">
																<div class="inner_l">
																	{/* <img src="assets/image/Icon.png"> */}
																</div>
															</div>
															<div class="righti_text">
																<div class="rig_th">
																	<span>Mail</span>
																	<p>info@qlspace.com.au</p>
																</div>
															</div>
														</div>
														<div class="kn_left_list">
															<div class="lefti_text">
																<div class="inner_l">
																	{/* <img src="assets/image/map.png"> */}
																</div>
															</div>
															<div class="righti_text">
																<div class="rig_th">
																	<span>Address</span>
																	<p>45 St Georges Terrace, Ground Floor,Perth, WA, 6000</p>
																</div>
															</div>
														</div>
														<div class="kn_left_list">
															<div class="lefti_text">
																<div class="inner_l">
																	{/* <img src="assets/image/map.png"> */}
																</div>
															</div>
															<div class="righti_text">
																<div class="rig_th">
																	<span>Addess</span>
																	<p>Ground Floor, Space Lab Building, Lot Fourteen, Frome Road, ADELAIDE | SA |5000</p>
																</div>
															</div>
														</div>
													</div>

												</div>
												<div class="col-md-3">
													<div class="kn_list">
														<div class="kn_left_list">
															<div class="lefti_text">
																<div class="inner_l">
																	{/* <img src="assets/image/phone.png"> */}
																</div>
															</div>
															<div class="righti_text">
																<div class="rig_th">
																	<span>Mail</span>
																	<p>+61 8 6262 3559</p>
																</div>
															</div>
														</div>
														<div class="kn_left_list">
															<div class="lefti_text">
																<div class="inner_l">
																	{/* <img src="assets/image/phone.png"> */}
																</div>
															</div>
															<div class="righti_text">
																<div class="rig_th">
																	<span>Mail</span>
																	<p>+61 410 881 616</p>
																</div>
															</div>
														</div>

													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="copy_right">
										<div class="container">
											<div class="row">
												<div class="col-md-6">
													<div class="outg_o">
														<p>Copyright ©2023 SPACE. Powered By QL Tech</p>
													</div>
												</div>
												<div class="col-md-6">
													<div class="right_text_copy">
														All Rights Reserved <span><ul>
															<li><a href="#"> Terms and Conditions </a></li>
															<li><a href="#"> Privacy Policy </a></li>
														</ul>
														</span>

													</div>
												</div>
											</div>
										</div>
									</div>
								</footer>
							</div>
						</section>
					</Layout>
				)
			}
			}
		/>
	)
}
