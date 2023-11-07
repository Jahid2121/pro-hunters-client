
const SingleJob = ({job}) => {
    const {_id,bannerUrl,jobTitle,loggedInUserName,jobCategory,salaryRange,jobDescription,jobPostingDate,applicationDeadline,jobApplicantsNumber} = job;
  return (
    <div>
    <h2>{jobTitle}</h2>
    </div>
  );
};

export default SingleJob;