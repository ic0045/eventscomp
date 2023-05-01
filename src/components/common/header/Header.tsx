import styles from "./header.module.css";
import { FunctionComponent } from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import { useSession } from "next-auth/react";
import Link from "next/link";

export const Header: FunctionComponent = () => {
  const { data: session } = useSession();

  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </Link>
      </div>
      <div className={styles.header__session}>
        {session ? (
          <div className={styles.header__usuario}>
            <Image
              src={session.user.fotoPerfil ??  "/avatar.png" } 
              alt="avatar"
              width="30"
              height="30"
              style={{ borderRadius: "5rem", marginRight: "0.5rem" }}
            />
            {`${session.user.primeiroNome} ${session.user.segundoNome}`}
          </div>
        ) : (
          <div className={styles.header__login}>
            <Button variant="contained" color="success">
              Login
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#76D104",
                marginLeft: "0.5rem",
              }}
              href="/cadastrousuario"
            >
              Cadastro
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
