import React from "react";
import { Card, CardContent, Typography, Chip, Box } from "@mui/material";
import styles from "../../../../scss/user/blog/blog.module.scss";

const BlogTableIndex = ({ blogData }) => {
  const badgeColors = ["primary", "secondary", "success", "danger", "info"];

  return (
    <div>
      {blogData?.map((blog, index) => (
        <Box key={index} className="mb-6 mt-6">
          <Card className={`${styles?.blogCard}`}>
            <CardContent className={`${styles?.blogCardBody}`}>
              <Typography variant="h5" className={`${styles?.blogCardTitle}`}>
                제목 : {blog?.title}
              </Typography>
              <Typography variant="body1" className={`${styles?.blogCardText}`}>
                내용 : {blog?.contents}
              </Typography>
              <Box>
                {blog?.tag?.map((t, tIndex) => (
                  <Chip
                    key={tIndex}
                    label={`# ${t}`}
                    color={badgeColors[tIndex % 5]}
                    className="m-2"
                  />
                ))}
              </Box>
            </CardContent>
          </Card>
        </Box>
      ))}
    </div>
  );
};

export default BlogTableIndex;
