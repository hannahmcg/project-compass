import { trpc } from "@/lib/trpc";
import { useRouter } from "next/router";

const ViewStudentPage = () => {
  const router = useRouter();
  const { student_id } = router.query;

  const { data: student, isLoading } = trpc.getStudentById.useQuery(
    { student_id: student_id as string },
    { enabled: Boolean(student_id) }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Student {student?.student_id}</h1>
      <p>
        {student?.first_name} {student?.last_name}
      </p>
    </div>
  );
};

export default ViewStudentPage;
