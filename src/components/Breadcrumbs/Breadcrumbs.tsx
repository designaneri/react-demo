import Breadcrumbs from '@mui/material/Breadcrumbs';
export const CustomBreadcrumbs = (props: any) => {
  const { breadcrumbs } = props;
  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb">
      {breadcrumbs}
    </Breadcrumbs>
  );
};
export default CustomBreadcrumbs;
