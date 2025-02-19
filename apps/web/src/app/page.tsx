import { Flex, Text } from "@radix-ui/themes";
import { Button } from "@repo/ui";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* <ThemeChanger /> */}
      <main className={styles.main}>
        <Flex direction="column" gap="2">
          <Text>Hello from Radix Themes :)</Text>
          <Button>Lets go</Button>
        </Flex>

        <ol>
          <li>
            Get started by editing <code>apps/web/app/page.tsx</code>
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <Button>Open alert</Button>
      </main>
    </div>
  );
}
