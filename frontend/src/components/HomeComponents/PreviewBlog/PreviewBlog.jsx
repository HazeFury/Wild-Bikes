import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./PreviewBlog.module.css";

export default function PreviewBlog() {
  const bloData = [
    {
      id: 1,
      title: "Les meilleures destinations de road trip",
      teaser:
        "Vous rêver de faire un road trip depuis longtemps mais vous ne savez pas où partir ? Cet article vous donne des réponses.",
      image:
        "https://images.unsplash.com/photo-1565716697084-4a97983007fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      title: "Top 10 des motos les plus vendues",
      teaser:
        "Découvrez les motos les plus vendues de toute l'histoire. On parie que vous en connaissez au moins une !",
      image:
        "https://images.unsplash.com/photo-1563453526402-cfbf4d1e7991?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 3,
      title: "Nos astuces pour rouler de nuit en sécurité",
      teaser:
        "C'est la hantise de nombreux motard que de rouler la nuit. Découvrez nos astuces pour mieux apréhender ce moment.",
      image:
        "https://images.unsplash.com/photo-1552306062-29a5560e1c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
  ];
  return (
    <div className={styles.blog_container}>
      {bloData.map((blog) => (
        <Card key={blog.id} sx={{ maxWidth: 345, my: 2, mx: 4 }}>
          <CardMedia
            sx={{ height: 200 }}
            image={blog.image}
            title={`blog #${blog.id}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {blog.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {blog.teaser}
            </Typography>
          </CardContent>
          <CardActions>
            <Button sx={{ color: "rgb(248, 100, 100)" }} size="small">
              Lire l'article
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
