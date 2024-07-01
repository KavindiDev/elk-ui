"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { oneDark, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
SyntaxHighlighter.registerLanguage('jsx', jsx);     

function copyToClipboard(text) {
    if (!navigator.clipboard) {
        // Clipboard API not available
        return
    }
    navigator.clipboard.writeText(text)
}

export default function Codebox({ title, component, code, note }) {
    const { toast } = useToast();
    const { theme, resolvedTheme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);

    // Ensure component is mounted to avoid SSR issues with next-themes
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null; // Avoid rendering until mounted to handle theme switching correctly
    }

    return (
        <div className="w-full">
            <Tabs className="w-full" defaultValue="preview">
                <div className="flex flex-col md:flex-row justify-between items-center pb-2">
                    <h2 className="text-lg font-semibold mb-2 md:mb-0">{title}</h2>
                    <div className="flex items-center gap-4">
                        <TabsList className="border-b border-gray-200 dark:border-gray-800">
                            <TabsTrigger value="preview">Preview</TabsTrigger>
                            <TabsTrigger value="code">Code</TabsTrigger>
                        </TabsList>
                        <Button
                            type="button"
                            size="sm"
                            className="px-3"
                            variant="ghost"
                            onClick={() => {
                                copyToClipboard(code);
                                toast({ description: "Copied to clipboard" });
                            }}
                        >
                            <span className="sr-only">Copy</span>
                            <Copy className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
                <Card className="w-full h-full">
                    <CardContent className="flex flex-col items-center justify-center p-6">
                        <TabsContent value="preview">
                            {component}
                        </TabsContent>
                        <TabsContent value="code" className="w-full">
                            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg w-full p-4 overflow-auto">
                                <SyntaxHighlighter
                                    language="jsx"
                                    style={resolvedTheme === 'dark' ? oneDark : oneLight
                                    }
                                >
                                    {code}
                                </SyntaxHighlighter>
                            </div>
                        </TabsContent>
                    </CardContent>
                    {note && (
                        <CardFooter className="text-sm text-gray-500 dark:text-gray-400 p-4">
                            {note}
                        </CardFooter>
                    )}
                </Card>
            </Tabs>
        </div>
    );
}
